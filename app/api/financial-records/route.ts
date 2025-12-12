import { createClient } from "@/lib/supabase/server";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        // Verify authentication
        const supabase = await createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json(
                { error: "No autenticado" },
                { status: 401 }
            );
        }

        // Get assetId from query params
        const { searchParams } = new URL(request.url);
        const assetId = searchParams.get("assetId");

        // Build query
        const whereClause: any = {
            asset: {
                userId: user.id,
            },
        };

        if (assetId) {
            whereClause.assetId = assetId;
        }

        // Fetch financial records
        const records = await prisma.financialRecord.findMany({
            where: whereClause,
            include: {
                asset: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                    },
                },
            },
            orderBy: {
                date: "desc",
            },
        });

        return NextResponse.json(records);
    } catch (error) {
        console.error("Error fetching financial records:", error);
        return NextResponse.json(
            { error: "Error al obtener los registros financieros" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        // Verify authentication
        const supabase = await createClient();
        const {
            data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
            return NextResponse.json(
                { error: "No autenticado" },
                { status: 401 }
            );
        }

        // Parse request body
        const body = await request.json();
        const { assetId, amount, type, date, endDate, description } = body;

        // Validate required fields
        if (!assetId || !amount || !type || !date) {
            return NextResponse.json(
                { error: "El activo, monto, tipo y fecha son obligatorios" },
                { status: 400 }
            );
        }

        // Validate type
        if (!["INCOME", "EXPENSE"].includes(type)) {
            return NextResponse.json(
                { error: "Tipo inválido. Debe ser INCOME o EXPENSE" },
                { status: 400 }
            );
        }

        // Verify asset belongs to user
        const asset = await prisma.asset.findFirst({
            where: {
                id: assetId,
                userId: user.id,
            },
        });

        if (!asset) {
            return NextResponse.json(
                { error: "Activo no encontrado o no autorizado" },
                { status: 404 }
            );
        }

        // Validate endDate is after date if provided
        if (endDate && new Date(endDate) < new Date(date)) {
            return NextResponse.json(
                { error: "La fecha final debe ser posterior a la fecha inicial" },
                { status: 400 }
            );
        }

        // Create financial record
        const record = await prisma.financialRecord.create({
            data: {
                assetId,
                amount,
                type,
                date: new Date(date),
                endDate: endDate ? new Date(endDate) : null,
                description,
            },
            include: {
                asset: {
                    select: {
                        id: true,
                        name: true,
                        type: true,
                    },
                },
            },
        });

        return NextResponse.json(record, { status: 201 });
    } catch (error) {
        console.error("Error creating financial record:", error);
        return NextResponse.json(
            { error: "Error al crear el registro financiero" },
            { status: 500 }
        );
    }
}
