# Configuración CNAME para GoDaddy

## Opción 1: Domain Forwarding (Más Fácil)
**URL para forwarding:**
```
https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
```

## Opción 2: Configuración CNAME (Alternativa)

### Registros DNS a Configurar:

#### Para WWW (CNAME Record):
```
Tipo: CNAME
Nombre: www
Valor: 4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
TTL: 600
```

#### Para Dominio Principal (A Record o Forwarding):
El dominio principal (sin www) no puede usar CNAME. Opciones:

**Opción A - Forwarding:**
```
Desde: lagobravo.com
A: https://www.lagobravo.com
Tipo: Permanente (301)
```

**Opción B - Registro A (No recomendado para Replit):**
Replit no proporciona IPs estáticas, por lo que el forwarding es mejor.

## Configuración Completa en GoDaddy DNS:

### Paso 1: Acceder a DNS Management
- Ve a GoDaddy → Mis Productos
- lagobravo.com → DNS → Administrar DNS

### Paso 2: Agregar CNAME para WWW
- Clic en "Agregar" o "Add Record"
- Selecciona tipo: CNAME
- Completa:
  - **Nombre:** www
  - **Valor:** 4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
  - **TTL:** 600 segundos

### Paso 3: Configurar Dominio Principal
- En Domain Forwarding:
  - **Desde:** lagobravo.com
  - **A:** https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
  - **Tipo:** Permanente (301)

## Resumen de Configuración:

### DNS Records:
```
www.lagobravo.com → CNAME → 4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
```

### Domain Forwarding:
```
lagobravo.com → https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev
```

## Tiempo de Propagación:
- CNAME: 10-30 minutos
- Forwarding: 5-15 minutos
- Global: Hasta 48 horas

## Nota Importante:
Para CNAME, NO incluyas "https://" - solo el dominio:
- ✅ Correcto: `4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev`
- ❌ Incorrecto: `https://4a97025b-29d1-4401-ab68-11ed4caae996-00-2gjnt4321iwqw.riker.replit.dev`