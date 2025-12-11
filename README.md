# enfoCAR

<p align="center">
  <strong>Gestión Inteligente de Activos Vehiculares</strong>
</p>

<p align="center">
  <a href="#caracter%C3%ADsticas"><strong>Características</strong></a> ·
  <a href="#tecnolog%C3%ADas"><strong>Tecnologías</strong></a> ·
  <a href="#instalaci%C3%B3n"><strong>Instalación</strong></a>
</p>
<br/>

## Descripción

**enfoCAR** es una solución integral diseñada para la gestión eficiente de flotas de vehículos. Nuestra aplicación permite a los propietarios y administradores llevar un control detallado de sus activos (carros, buses, camiones), monitorear ingresos y gastos, y tomar decisiones informadas gracias a un panel de control intuitivo.

## Características

- **Gestión de Activos**: Registro y administración detallada de vehículos, incluyendo metadatos personalizados.
- **Seguimiento Financiero**: Control preciso de ingresos y egresos por unidad, permitiendo un análisis de rentabilidad claro.
- **Panel de Control (Dashboard)**: Visualización de métricas clave en tiempo real para una toma de decisiones ágil.
- **Diseño Mobile-First**: Una experiencia de usuario optimizada para dispositivos móviles, permitiendo la gestión desde cualquier lugar.
- **Autenticación Segura**: Sistema de login robusto impulsado por Supabase Auth.
- **Soporte Multilenguaje**: Aplicación totalmente en español.

## Tecnologías

Este proyecto está construido con un stack moderno y eficiente:

- **[Next.js](https://nextjs.org)**: Framework de React para producción (App Router).
- **[Supabase](https://supabase.com)**: Backend as a Service (Auth, Database).
- **[Prisma](https://www.prisma.io)**: ORM de nueva generación para Node.js y TypeScript.
- **[Tailwind CSS](https://tailwindcss.com)**: Framework de utilidades CSS para un diseño rápido y flexible.
- **[shadcn/ui](https://ui.shadcn.com/)**: Componentes de UI reutilizables y accesibles.

## Instalación

Para ejecutar el proyecto localmente:

1.  **Clonar el repositorio**:
    ```bash
    git clone <tu-repositorio-url>
    cd <nombre-del-directorio>
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Renombra `.env.example` a `.env.local` y añade tus credenciales de Supabase:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=[TU_URL_DE_SUPABASE]
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=[TU_LLAVE_PUBLICA_DE_SUPABASE]
    ```

4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```

    La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Licencia

Este proyecto es propiedad privada y está destinado para uso interno.
