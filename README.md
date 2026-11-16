# Implementación de CRUD de productos en DynamoDB con Express

El sistema de gestión de productos de una tienda en línea requiere la implementación de operaciones CRUD sobre una base de datos DynamoDB, expuestas a través de una API REST construida con Express. Los productos tienen atributos como nombre, precio, descripción y categoría. La API debe manejar errores como productos no encontrados y validaciones de datos. Las operaciones deben estar cubiertas por pruebas unitarias utilizando Jest, mockeando DynamoDB para evitar salidas a la red.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | CRUD de productos con Express y DynamoDB |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y entregará cada archivo con su ruta.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y entregará cada archivo con su ruta. Guárdalos en la carpeta donde quieras trabajar, respetando las rutas.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no entrega todos los archivos al terminar el análisis, escríbele: "entrégame todos los archivos con su ruta".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración inicial y persistencia de productos

**Objetivo:** Configurar el entorno de desarrollo y permitir la persistencia de productos en DynamoDB.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Configura el proyecto con Express y AWS SDK v3.
- Implementa la funcionalidad para crear un producto en DynamoDB.
- Asegúrate de que la API maneje correctamente los errores de validación de datos.

**Entregable:** API REST que permite crear productos en DynamoDB y maneja errores de validación.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda mockear DynamoDB en las pruebas unitarias con Jest.

</details>

### Fase 2: Consulta y actualización de productos

**Objetivo:** Implementar la funcionalidad para consultar y actualizar productos en DynamoDB.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Añade endpoints para consultar un producto por su ID y para actualizar un producto existente.
- Implementa las validaciones necesarias para asegurar la integridad de los datos al actualizar.

**Entregable:** API REST extendida para consultar y actualizar productos, con validaciones de datos.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el AWS SDK v3 para interactuar con DynamoDB.
- Mockea DynamoDB en las pruebas unitarias para evitar salidas a la red.

</details>

### Fase 3: Eliminación de productos y pruebas completas

**Objetivo:** Completar la implementación de la funcionalidad para eliminar productos y asegurar la cobertura de pruebas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementa el endpoint para eliminar un producto por su ID.
- Asegura que todas las operaciones CRUD estén cubiertas por pruebas unitarias en Jest.
- Mockea DynamoDB en todas las pruebas para evitar salidas a la red.

**Entregable:** API REST completa con todas las operaciones CRUD y pruebas unitarias en Jest.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda no usar Mongoose en ninguna capa del proyecto.
- Asegúrate de que todas las pruebas unitarias mockeen DynamoDB.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un producto en el contexto de este reto y cuáles son sus atributos?
- **paraQueSirve**: ¿Para qué sirve cada operación CRUD en el dominio de productos?
- **comoSeUsa**: ¿Cómo se usa la API REST para interactuar con los productos?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir al interactuar con la API y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la implementación de las operaciones CRUD sobre DynamoDB?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo con Express y AWS SDK v3.
- Implementación de la funcionalidad para crear productos en DynamoDB con manejo de errores de validación.
- Implementación de la funcionalidad para consultar y actualizar productos con validaciones de datos.
- Implementación de la funcionalidad para eliminar productos.
- Cobertura completa de pruebas unitarias en Jest, mockeando DynamoDB para evitar salidas a la red.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT) si no tenes un agente en el IDE. Declara lo mismo que AGENTS.md; los archivos que te devuelva el chat los guardas en esta carpeta respetando las rutas.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Mapa de componentes

El repo tiene una carpeta por componente. Cada uno se instala y verifica dentro de la suya.

| Componente | Carpeta | Rol | Capa | Track | Tecnologias |
|---|---|---|---|---|---|
| `app` | (raiz) | practice, chapter | server | Node | Express, DynamoDB, Jest |
| `infra-local` | (raiz) | support | infra | Compose local | DynamoDB |

## Orden de arranque

1. `docker compose up -d` (en la raiz) — levanta la infraestructura local.
2. `npm install --no-audit --no-fund && npm run build` — componente `app` (practice, chapter).

### Contratos entre componentes

- `app` expone http (api: http://localhost:3000):
  - `POST /products`
  - `GET /products/:id`
  - `PUT /products/:id`
  - `DELETE /products/:id`

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
