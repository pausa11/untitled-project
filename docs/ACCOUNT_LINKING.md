# Vinculación de Cuentas en Supabase

## Problema

Cuando un usuario se registra con email/password y luego intenta autenticarse con Google usando el mismo email, Supabase crea dos identidades diferentes con IDs distintos. Esto puede causar problemas en la aplicación.

## Solución Actual (Temporal)

Actualmente, el código maneja esto de forma defensiva:
- Si el usuario no existe en Prisma, intenta crearlo
- Si falla por email duplicado, simplemente continúa
- Esto significa que el usuario de Google OAuth no podrá ver los datos del usuario de email/password

## Solución Recomendada: Habilitar Account Linking en Supabase

### Opción 1: Configurar en Supabase Dashboard (Recomendado)

1. Ve a tu [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecciona tu proyecto
3. Ve a **Authentication** → **Providers**
4. En la configuración de **Google**, busca la opción **"Link accounts with the same email"**
5. Habilítala

Esto hará que Supabase automáticamente vincule cuentas que usen el mismo email, sin importar el método de autenticación.

### Opción 2: Deshabilitar Registro con Email/Password

Si prefieres que los usuarios solo usen Google OAuth:

1. Ve a **Authentication** → **Providers**
2. Deshabilita **Email** como provider
3. Mantén solo **Google** habilitado

### Opción 3: Permitir Múltiples Métodos (Configuración Actual)

Si quieres permitir ambos métodos pero que sean cuentas separadas:

- Mantén la configuración actual del código
- Los usuarios tendrán cuentas separadas dependiendo del método que usen
- **Desventaja**: Datos no compartidos entre métodos de autenticación

## Recomendación

Para la mejor experiencia de usuario, **habilita "Link accounts with the same email"** en Supabase. Esto permitirá que:
- Un usuario se registre con email/password
- Luego pueda autenticarse con Google usando el mismo email
- Ambos métodos accedan a la misma cuenta y datos

## Verificación

Después de habilitar account linking:
1. Crea una cuenta con email/password
2. Cierra sesión
3. Inicia sesión con Google usando el mismo email
4. Deberías ver los mismos datos en ambos casos
