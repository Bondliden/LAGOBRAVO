# Redirección Inteligente Configurada

## Funcionamiento

### ✅ Permite Previsualización:
- **Replit**: Se ve el sitio completo normalmente
- **Localhost**: Desarrollo local funciona
- **replit.dev**: URLs de Replit funcionan

### ✅ Redirige Automáticamente:
- **Cualquier otro dominio**: Redirige a www.lagobravo.com
- **Dominios personalizados**: Redirige a www.lagobravo.com
- **Accesos directos**: Redirige a www.lagobravo.com

## Código Implementado:
```javascript
if (window.location.hostname !== 'replit.com' && 
    window.location.hostname !== 'localhost' && 
    !window.location.hostname.includes('replit.dev')) {
  window.location.replace("https://www.lagobravo.com");
}
```

## Resultado:
- **En Replit**: Ves el sitio completo de Lago Bravo
- **Desde otros lugares**: Redirige a www.lagobravo.com automáticamente

Esto te permite trabajar y previsualizar en Replit, pero cualquier visita externa se redirige a tu dominio principal.