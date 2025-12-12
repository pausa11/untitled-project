# Configuración de Google OAuth en Supabase

Esta guía te ayudará a configurar la autenticación con Google en tu proyecto de Supabase para enfoCAR.

## Paso 1: Crear Credenciales en Google Cloud Console

1. Ve a [Google Cloud Console](https://console.cloud.google.com/)
2. Crea un nuevo proyecto o selecciona uno existente
3. En el menú lateral, navega a **APIs & Services** → **Credentials**
4. Haz clic en **Create Credentials** → **OAuth client ID**
5. Si es tu primera vez, necesitarás configurar la pantalla de consentimiento OAuth:
   - Selecciona **External** como tipo de usuario
   - Completa la información requerida (nombre de la app, email de soporte, etc.)
   - Agrega los scopes necesarios: `email`, `profile`, `openid`
   - Guarda y continúa

## Paso 2: Configurar OAuth Client ID

1. Selecciona **Web application** como tipo de aplicación
2. Dale un nombre descriptivo (ej: "enfoCAR - Supabase Auth")
3. En **Authorized JavaScript origins**, agrega:
   - `http://localhost:3000` (para desarrollo local)
   - Tu dominio de producción cuando lo tengas
4. En **Authorized redirect URIs**, necesitarás agregar la URL de callback de Supabase:
   - Ve a tu [Supabase Dashboard](https://supabase.com/dashboard)
   - Selecciona tu proyecto
   - Navega a **Authentication** → **Providers** → **Google**
   - Copia la **Callback URL** que aparece ahí (será algo como: `https://[tu-proyecto].supabase.co/auth/v1/callback`)
   - Pégala en las URIs autorizadas de Google Cloud Console
5. Haz clic en **Create**
6. **Guarda el Client ID y Client Secret** que se generan

## Paso 3: Configurar Google Provider en Supabase

1. Ve a tu [Supabase Dashboard](https://supabase.com/dashboard)
2. Selecciona tu proyecto
3. Navega a **Authentication** → **Providers**
4. Busca **Google** en la lista de providers
5. Activa el toggle para habilitar Google
6. Pega el **Client ID** de Google
7. Pega el **Client Secret** de Google
8. Haz clic en **Save**

## Paso 4: Configurar URL de Redirección (Site URL)

1. En el mismo dashboard de Supabase, ve a **Authentication** → **URL Configuration**
2. Asegúrate de que tu **Site URL** esté configurada correctamente:
   - Para desarrollo: `http://localhost:3000`
   - Para producción: tu dominio real
3. En **Redirect URLs**, agrega:
   - `http://localhost:3000/auth/callback`
   - Tu URL de producción cuando la tengas (ej: `https://tudominio.com/auth/callback`)

## Verificación

Una vez completados estos pasos:

1. Ve a `http://localhost:3000/auth/login`
2. Deberías ver el botón "Continuar con Google"
3. Al hacer clic, serás redirigido a Google para autenticarte
4. Después de autenticarte, serás redirigido de vuelta a `/app`

## Solución de Problemas

### Error: "redirect_uri_mismatch"
- Verifica que la URL de callback en Google Cloud Console coincida exactamente con la de Supabase
- Asegúrate de no tener espacios o caracteres extra

### El botón no hace nada
- Abre la consola del navegador para ver errores
- Verifica que las credenciales estén guardadas correctamente en Supabase

### Error después de autenticarse
- Verifica que la ruta `/auth/callback` exista en tu proyecto
- Revisa los logs de Supabase en el dashboard

## Notas Importantes

- En producción, asegúrate de actualizar las URLs autorizadas en Google Cloud Console
- Considera agregar tu logo y políticas de privacidad en la pantalla de consentimiento de Google
- Los usuarios que se registren con Google no necesitarán verificar su email
