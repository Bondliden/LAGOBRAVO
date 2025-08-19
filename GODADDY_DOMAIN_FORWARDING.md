# Configurar Domain Forwarding en GoDaddy

## Pasos en GoDaddy

### 1. Acceder a Domain Management
- Ve a **godaddy.com** → **Mis Productos**
- Encuentra tu dominio **lagobravo.com**
- Haz clic en **Administrar** o **Manage**

### 2. Configurar Domain Forwarding
- Busca la sección **Reenvío** o **Domain Forwarding**
- Haz clic en **Configurar** o **Set up**

### 3. Configuración de Redirección
```
Reenviar a: https://tu-url-replit.replit.dev
Tipo de reenvío: Permanente (301)
Configuración: Solo reenvío
```

### 4. Configurar WWW
También configura para www:
```
www.lagobravo.com → https://tu-url-replit.replit.dev
Tipo: Permanente (301)
```

## URL de tu Replit

Para encontrar tu URL de Replit:
1. En tu proyecto Replit, haz clic en **"Open in new tab"**
2. Copia la URL completa (algo como `https://nombreproyecto-usuario.replit.dev`)
3. Usa esa URL en el Domain Forwarding

## DNS Automático

GoDaddy configurará automáticamente:
```
Tipo: A
Nombre: @
Valor: [IP de redirección GoDaddy]

Tipo: CNAME
Nombre: www
Valor: [servidor de redirección GoDaddy]
```

## Resultado Final

- **lagobravo.com** → Tu sitio en Replit
- **www.lagobravo.com** → Tu sitio en Replit
- **Tiempo de propagación**: 5-10 minutos localmente, 24-48 horas globalmente

## Ventajas

- ✅ No necesitas hosting
- ✅ No necesitas GitHub
- ✅ Configuración simple en GoDaddy
- ✅ Tu sitio se ve desde tu dominio
- ✅ Redirección permanente (SEO friendly)