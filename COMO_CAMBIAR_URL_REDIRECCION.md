# Cómo Cambiar la URL de Redirección

## Ubicación del Archivo
**Archivo:** `client/index.html`
**Líneas a cambiar:** 6 y 35

## Cambios Necesarios

### Cambio 1: Meta Refresh (Línea 6)
**Busca esta línea:**
```html
<meta http-equiv="refresh" content="0; url=https://tudominio.com">
```

**Cambia por:**
```html
<meta http-equiv="refresh" content="0; url=https://tu-dominio-real.com">
```

### Cambio 2: JavaScript (Línea 8)
**Busca esta línea:**
```javascript
window.location.replace("https://tudominio.com");
```

**Cambia por:**
```javascript
window.location.replace("https://tu-dominio-real.com");
```

### Cambio 3: Enlace de Backup (Línea 35)
**Busca esta línea:**
```html
<a href="https://tudominio.com" style="color: #fbbf24;">Click here if not redirected automatically</a>
```

**Cambia por:**
```html
<a href="https://tu-dominio-real.com" style="color: #fbbf24;">Click here if not redirected automatically</a>
```

## Ejemplos de URLs

**Para tu dominio GoDaddy:**
```
https://lagobravo.com
https://lagobravoresort.com
https://tu-dominio-godaddy.com
```

**Para GitHub Pages:**
```
https://bondliden.github.io/lagobravo-website
```

## Pasos
1. Abre el archivo `client/index.html`
2. Busca las 3 líneas mencionadas
3. Reemplaza `https://tudominio.com` con tu URL real
4. Guarda el archivo
5. La redirección funcionará inmediatamente