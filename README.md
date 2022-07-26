# Yannick's TRPC Test con NextJS + Typescript

Este repo fue solo para probar los pininos de trpc con next usando su servidor interno.

## Notas personales
- TRPC esta muy cool como idea
- Falta verificar como implementar medidas de authorization para ciertos procedures restringidos
- Nota mental, verificar trpc + prisma + trpc-prisma-generatr
- Puedo ver como se no adoptar un modelo de nombramiento el nombre de los procedures puede ser un caos para proyectos grandes
- Si bien los docs hablan de un vanilla client, habria que ver cuando salen client adapters para angular y sobre todo vue
- No hay docs acerca de buffers, blobs o file objects o como manejar files con trpc para subida de archivos en general

## TODOS
- Implementar con SQL , planetscale recomendado
- Verificar typeo general para proyectos de Vue 2 (3 ya lo tiene semi resuelto)

## Como correr el dev server

Dev Server

```bash
npm run dev
# or
yarn dev
```