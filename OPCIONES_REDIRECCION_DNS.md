# Opciones de Redirección para Lago Bravo

## 🎯 Escenarios de Redirección

### Opción 1: Redirección de Dominio (Domain Forwarding)
**Uso:** Redirigir tu dominio GoDaddy a otro sitio web

**Configuración en GoDaddy:**
1. **Mis Productos** → **Dominios** → **Administrar**
2. **Reenvío** o **Domain Forwarding**
3. **Configurar:**
   ```
   Reenviar a: https://destino.com
   Tipo: Permanente (301)
   ```

### Opción 2: Redirección DNS (CNAME)
**Uso:** Apuntar tu dominio a otro servidor/hosting

**Registros DNS:**
```
Tipo: CNAME
Nombre: www
Valor: destino.com

Tipo: A
Nombre: @
Valor: [IP del servidor destino]
```

### Opción 3: Redirección con .htaccess
**Uso:** Redirecciones desde tu hosting GoDaddy

**En tu archivo .htaccess:**
```apache
# Redirigir todo el sitio
Redirect 301 / https://nuevositio.com/

# Redirigir páginas específicas
Redirect 301 /viejo https://nuevositio.com/nuevo
```

## 📋 Casos Comunes

### Caso A: Dominio GoDaddy → GitHub Pages
**DNS en GoDaddy:**
```
Tipo: A (4 registros)
Nombre: @
Valores: 
- 185.199.108.153
- 185.199.109.153  
- 185.199.110.153
- 185.199.111.153

Tipo: CNAME
Nombre: www
Valor: usuario.github.io
```

### Caso B: Dominio GoDaddy → Otro Hosting
**DNS en GoDaddy:**
```
Tipo: A
Nombre: @
Valor: [IP del hosting destino]

Tipo: CNAME
Nombre: www
Valor: @
```

### Caso C: Subdominio → Sitio Principal
**DNS en GoDaddy:**
```
Tipo: CNAME
Nombre: blog
Valor: tudominio.com

Tipo: CNAME
Nombre: tienda
Valor: tudominio.com
```

## 🚀 Para tu Proyecto Lago Bravo

### Opción Recomendada: Hosting Directo
- **No redirección** - Hosting directo en GoDaddy
- **Mejor rendimiento** - Sin saltos adicionales
- **Control total** - Tu sitio en tu hosting

### Si Quieres Usar GitHub Pages:
**DNS en GoDaddy:**
```
Tipo: A
Nombre: @  
Valor: 185.199.108.153 (y los otros 3 IPs)

Tipo: CNAME
Nombre: www
Valor: bondliden.github.io
```

**En GitHub:**
- Settings → Pages → Custom domain: `tudominio.com`

## ⏱️ Tiempos de Propagación

- **Domain Forwarding**: 5-10 minutos
- **DNS CNAME**: 1-4 horas
- **DNS A Records**: 4-24 horas
- **Propagación global**: 24-48 horas

## 🔧 Herramientas de Verificación

- **DNS Checker**: dnschecker.org
- **What's My DNS**: whatsmydns.net
- **Dig Tool**: Para verificar registros DNS

**¿Qué tipo de redirección necesitas específicamente?**