# WordPress Hosting para Lago Bravo

## Opciones de WordPress

### Opción 1: WordPress.com (Hosting Incluido)
**Planes:**
- Personal: $4/mes - Blog básico
- Premium: $8/mes - Dominio personalizado
- Business: $25/mes - Plugins y temas personalizados
- eCommerce: $45/mes - Tienda online

**Para tu sitio personalizado:**
- Necesitas plan Business ($25/mes) mínimo
- Permite subir archivos HTML personalizados
- Conectar tu dominio GoDaddy

### Opción 2: WordPress Hosting en GoDaddy
**WordPress Hosting GoDaddy:**
- Basic: $9.99/mes
- Deluxe: $14.99/mes  
- Ultimate: $19.99/mes

**Incluye:**
- WordPress preinstalado
- Dominio conectado automáticamente
- Certificado SSL gratis

### Opción 3: Hosting Regular + WordPress
**Hosting GoDaddy + WordPress:**
- Economy hosting ($7.99/mes)
- Instalar WordPress manualmente
- Subir tu sitio como tema personalizado

## Para tu Sitio de Lago Bravo

### Conversión a WordPress:
Tu sitio HTML actual necesitaría convertirse a tema WordPress:
- `index.html` → `index.php`
- Dividir en partes (header.php, footer.php)
- Agregar funciones WordPress

### Alternativa Simple:
**Página HTML en WordPress:**
- Crear página con tu código HTML completo
- Usar plugin "Insert HTML" 
- Mantener diseño actual sin conversión

### DNS Configuration:
Si eliges WordPress.com:
```
Tipo: CNAME
Nombre: www
Valor: tudominio.wordpress.com

Tipo: A
Nombre: @
Valor: [IP de WordPress]
```

## Recomendación

**Para Lago Bravo:**
1. **GoDaddy Hosting regular** ($7.99/mes) + subir HTML directamente
   - Más económico
   - Tu diseño se mantiene exacto
   - Control total

2. **WordPress.com Business** ($25/mes)
   - Si quieres gestión de contenido fácil
   - Requiere conversión a tema WordPress
   - Más caro pero con más funciones

**¿Prefieres mantener tu diseño HTML actual o convertir a WordPress?**