# Landing de Odontología

## Descripción

Landing page independiente para captar consultorios odontológicos, accesible en `/odontologia`.

## Características

- **Estética premium**: Colores claros (cyan, blue, teal) con gradientes suaves
- **CTA principal**: "Hablar por WhatsApp" - conecta directamente con la agencia
- **Flujo simple**: Explica solo el TIER 1 (landing profesional con WhatsApp)
- **Sin precios**: No muestra planes, tiers ni precios
- **Tono humano**: Lenguaje profesional pero accesible

## Estructura de la Landing

1. **Hero**: Mensaje claro sobre landing moderna para consultorios
2. **Problem**: Explica la fricción en reservas actuales
3. **Solution**: Presenta la landing como herramienta moderna (3 features)
4. **Process**: Flujo de reserva en 3 pasos (formulario → WhatsApp → confirmación manual)
5. **Benefits**: 3 beneficios clave (experiencia, fricción, imagen)
6. **CTA Final**: Repetición del llamado a WhatsApp sin presión

## Configuración de WhatsApp

El número de WhatsApp se configura en: `config/whatsapp.ts`

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: '5491234567890', // Reemplazar con número real
  messages: {
    odontologia: 'Hola! Me interesa una landing profesional para mi consultorio odontológico.'
  }
};
```

## Archivos Creados

### Componentes
- `components/odontologia/OdontologiaHero.tsx`
- `components/odontologia/OdontologiaProblem.tsx`
- `components/odontologia/OdontologiaSolution.tsx`
- `components/odontologia/OdontologiaProcess.tsx`
- `components/odontologia/OdontologiaBenefits.tsx`
- `components/odontologia/OdontologiaCTA.tsx`

### Páginas
- `pages/OdontologiaLanding.tsx`

### Configuración
- `config/whatsapp.ts`

### Traducciones
Todas las traducciones están en `context/LanguageContext.tsx` bajo el prefijo `odonto.*`

## Routing

La aplicación usa React Router:
- `/` - Home jurídica (sin modificar)
- `/odontologia` - Landing de odontología

## Desarrollo

```bash
npm run dev
```

Acceder a: `http://localhost:3000/odontologia`

## Notas Importantes

- **No modifica la home jurídica**: Ambas landings son completamente independientes
- **Theme visual distinto**: Usa colores cyan/teal en lugar de neutral/zinc
- **Sin complejidad técnica**: Solo muestra solución simple y clara
- **Navbar compartido**: Ambas landings usan el mismo navbar de la agencia
