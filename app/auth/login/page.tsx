import { LoginForm } from "@/components/login-form";
import { LayoutDashboard, Bell, Smartphone } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-[hsl(74,100%,36%)] animate-gradient" />

        {/* Overlay Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full p-12 text-white">
          <div className="max-w-md space-y-6 text-center">
            {/* Large Logo */}
            <div className="space-y-4">
              <div className="w-24 h-24 mx-auto bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-12 h-12"
                >
                  <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                  <circle cx="6.5" cy="16.5" r="2.5" />
                  <circle cx="16.5" cy="16.5" r="2.5" />
                </svg>
              </div>

              <h1 className="text-6xl font-bold tracking-tight">
                enfo<span className="text-[hsl(74,100%,36%)]">CAR</span>
              </h1>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Tu asistente de gestión vehicular
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Mantén el control total de tus vehículos, documentos,
                mantenimientos y más, todo en un solo lugar.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Dashboard intuitivo
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2">
                <Bell className="w-4 h-4" />
                Recordatorios automáticos
              </div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium flex items-center gap-2">
                <Smartphone className="w-4 h-4" />
                Acceso móvil
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[hsl(74,100%,36%)]/20 rounded-full blur-3xl" />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-8 md:p-12 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-[hsl(74,100%,36%)]/10 rounded-2xl">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-primary"
              >
                <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
                <circle cx="6.5" cy="16.5" r="2.5" />
                <circle cx="16.5" cy="16.5" r="2.5" />
              </svg>
              <span className="text-3xl font-bold">
                <span className="text-primary">enfo</span>
                <span className="text-[hsl(74,100%,36%)]">CAR</span>
              </span>
            </div>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
}
