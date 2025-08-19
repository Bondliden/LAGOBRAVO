# Convertir Sitio Lago Bravo a WordPress

## Proceso de Conversión

### Archivos Necesarios para Tema WordPress:
```
tema-lagobravo/
├── style.css           (Estilos + header del tema)
├── index.php           (Página principal)
├── header.php          (Cabecera común)
├── footer.php          (Pie común)
├── functions.php       (Funciones del tema)
├── screenshot.png      (Preview del tema)
└── assets/            (CSS, JS, imágenes)
```

### Conversión de tu index.html:

**1. style.css** (Header del tema):
```css
/*
Theme Name: Lago Bravo Resort
Description: Luxury resort website theme
Version: 1.0
*/

/* Tu CSS actual aquí */
```

**2. header.php**:
```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <?php wp_head(); ?>
    <!-- Tus meta tags y favicon -->
</head>
<body <?php body_class(); ?>>
    <!-- Tu navegación actual -->
```

**3. footer.php**:
```php
    <!-- Tu footer actual -->
    <?php wp_footer(); ?>
</body>
</html>
```

**4. index.php**:
```php
<?php get_header(); ?>
    <!-- Contenido principal de tu sitio -->
<?php get_footer(); ?>
```

### Ventajas Conversión WordPress:
- Panel de administración fácil
- Actualizaciones de contenido simples
- Plugins adicionales disponibles
- SEO mejorado con plugins

### Desventajas:
- Requiere conocimiento PHP básico
- Más complejo que HTML estático
- Posibles problemas de compatibilidad

## Alternativa: Plugin HTML

**Más Simple:**
- Instalar WordPress
- Plugin "Custom HTML" 
- Pegar tu código HTML completo
- Mantener diseño exacto sin conversión

**¿Prefieres conversión completa o usar plugin HTML simple?**