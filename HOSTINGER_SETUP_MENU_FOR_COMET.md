# 📋 MENÚ DE CONFIGURACIÓN HOSTINGER - LAGO BRAVO
## Para: Comet de Perplexity

---

## 🎯 OBJETIVO
Configurar el sitio web **Lago Bravo Integrated Resorts** (www.lagobravo.com) en Hostinger.

---

## 📁 ARCHIVOS DISPONIBLES

### ✅ Archivo Principal para Subir:
- **`hostinger-website.zip`** (3.7 MB) - Ubicado en: `/dist/public/hostinger-website.zip`
- Contiene todo el frontend del sitio web listo para Hostinger

### 📄 Archivos de Documentación:
- **`LAGO_BRAVO_PROYECTO_COMPLETO.md`** - Todo el código del proyecto
- **`HOSTINGER_DEPLOYMENT_GUIDE.md`** - Guía detallada de deployment

---

## 🚀 OPCIÓN A: SITIO ESTÁTICO EN HOSTINGER (Más Simple)

### Paso 1: Subir Archivos
1. Descargar `hostinger-website.zip` de este Replit
2. Entrar a **hPanel de Hostinger**
3. Ir a **File Manager** → **public_html**
4. Borrar cualquier archivo existente (index.html default)
5. Subir y extraer el contenido del ZIP

### Paso 2: Configurar DNS
En **hPanel** → **Dominios** → **lagobravo.com** → **DNS/Nameservers**:

| Tipo | Nombre | Apunta a | TTL |
|------|--------|----------|-----|
| A | @ | [IP de Hostinger] | 14400 |
| A | www | [IP de Hostinger] | 14400 |

### ⚠️ Limitación:
- El sitio se verá perfecto pero los formularios NO funcionarán (no hay backend)

---

## 🔄 OPCIÓN B: REDIRECCIÓN A REPLIT (Todo Funcional)

### Paso Único: Configurar Redirección
1. En **hPanel** → **Dominios** → **lagobravo.com**
2. Click en **Redirect your domain**
3. Configurar:
   - **Destination URL**: 
   ```
   https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
   ```
   - **Redirect type**: **301 (Permanente)**
4. Click **Create redirect**

### ✅ Ventaja:
- Todo funciona: formularios, base de datos, reservaciones

---

## 🎨 OPCIÓN C: CONFIGURACIÓN HÍBRIDA (Avanzada)

### Requisitos:
1. **Frontend**: En Hostinger (archivos estáticos)
2. **Backend**: En Replit (API + Base de datos)
3. **Modificación**: Editar el frontend para apuntar al backend de Replit

### Pasos:
1. Subir archivos a Hostinger (como Opción A)
2. Mantener Replit corriendo para la API
3. Modificar las llamadas API en el frontend para usar:
   ```
   https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev/api/
   ```

---

## 📊 COMPARACIÓN RÁPIDA

| Característica | Opción A (Estático) | Opción B (Redirección) | Opción C (Híbrida) |
|----------------|---------------------|------------------------|-------------------|
| **Dificultad** | ⭐ Fácil | ⭐ Muy Fácil | ⭐⭐⭐ Compleja |
| **URL Final** | lagobravo.com | lagobravo.com → Replit | lagobravo.com |
| **Formularios** | ❌ No funcionan | ✅ Funcionan | ✅ Funcionan |
| **Base de Datos** | ❌ No | ✅ Sí | ✅ Sí |
| **Velocidad** | ⚡ Rápida | ⚡ Normal | ⚡ Rápida |
| **Costo Hosting** | 💰 Solo Hostinger | 💰 Solo Replit | 💰 Ambos |

---

## 🔧 INFORMACIÓN TÉCNICA

### Servidor Replit (Backend):
- **URL**: `https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev`
- **Puerto**: 5000
- **API Endpoints**:
  - `/api/reservations` - Reservaciones
  - `/api/wedding-inquiries` - Bodas
  - `/api/newsletter` - Newsletter

### Base de Datos:
- **Tipo**: PostgreSQL
- **Ubicación**: En Replit
- **Tablas**: reservations, wedding_inquiries, newsletter_subscriptions

---

## 💡 RECOMENDACIÓN

### Para Sitio Completo Funcional:
**→ Usa OPCIÓN B (Redirección)**
- Es la más fácil
- Todo funciona inmediatamente
- No requiere modificaciones de código

### Para Sitio Solo Visual:
**→ Usa OPCIÓN A (Estático)**
- Más rápido de cargar
- Bueno para presentación
- Los formularios no enviarán datos

---

## 📞 SOPORTE

### Archivos de Ayuda en este Replit:
- `HOSTINGER_DEPLOYMENT_GUIDE.md` - Instrucciones detalladas
- `LAGO_BRAVO_PROYECTO_COMPLETO.md` - Todo el código fuente
- `hostinger-deployment.json` - Configuración en JSON

### URLs Importantes:
- **Sitio Actual en Replit**: https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
- **Dominio Objetivo**: www.lagobravo.com

---

## ✅ CHECKLIST FINAL

Después de configurar, verificar:
- [ ] El dominio lagobravo.com carga correctamente
- [ ] Las imágenes y logo se ven bien
- [ ] La navegación funciona
- [ ] (Si eligió Opción B/C) Los formularios envían datos
- [ ] El sitio es responsivo en móviles

---

**Nota para Comet**: Este menú está diseñado para que puedas elegir y ejecutar la opción más conveniente. La OPCIÓN B es la más recomendada por ser simple y completa.