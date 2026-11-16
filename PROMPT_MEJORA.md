# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener el proyecto completo y arrancable. Guarda los archivos que te devuelva en la
carpeta del repo, respetando exactamente las rutas.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Superficie de practica — NO resuelvas

Estos archivos SON el ejercicio de la persona. No los implementes; deja stubs.

- `src/core/application/services/ProductService.ts` — La fase "Configuración inicial y persistencia de productos" (f1) practica ProductService.createProduct aqui: este archivo es el ejercicio (blueprint).
- `src/outbound-adapter/repositories/ProductRepositoryImpl.ts` — La fase "Configuración inicial y persistencia de productos" (f1) practica ProductRepositoryImpl.save aqui: este archivo es el ejercicio (blueprint).
- `src/inbound-adapter/routes/productRoutes.ts` — La fase "Configuración inicial y persistencia de productos" (f1) practica productRoutes.post('/products') aqui: este archivo es el ejercicio (blueprint).

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

## Como saber que terminaste

```bash
npm install --no-audit --no-fund && npm run build && docker compose config -q
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Backend, Especialidad Desarrollador, Tecnología Node, Advanced L2

### Brecha de conocimiento
CRUD de productos en DynamoDB expuesto por una API REST con Express y pruebas con Jest

### Misión / candidato
Persistir y consultar productos

### Reto
- Tema: CRUD de productos con Express y DynamoDB
- Seniority: advanced-l2
- Tipo: practical
- Título: Implementación de CRUD de productos en DynamoDB con Express
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración inicial y persistencia de productos — objetivo: Configurar el entorno de desarrollo y permitir la persistencia de productos en DynamoDB. — entregable (NO resolver): API REST que permite crear productos en DynamoDB y maneja errores de validación.
- Fase 2: Consulta y actualización de productos — objetivo: Implementar la funcionalidad para consultar y actualizar productos en DynamoDB. — entregable (NO resolver): API REST extendida para consultar y actualizar productos, con validaciones de datos.
- Fase 3: Eliminación de productos y pruebas completas — objetivo: Completar la implementación de la funcionalidad para eliminar productos y asegurar la cobertura de pruebas. — entregable (NO resolver): API REST completa con todas las operaciones CRUD y pruebas unitarias en Jest.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (entrega de archivos).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Entrega de archivos
Entregá cada archivo con su ruta completa, respetando exactamente la estructura de rutas
indicada por los marcadores: un bloque por archivo, precedido por su ruta. No generes ZIPs
ni archivos adjuntos.
La entrega debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: Entregá los archivos completos al finalizar. No preguntes si el usuario
quiere recibirlos. Simplemente entregalos; No debes desplegar en el chat el resumen de lo que arreglaste, solo entregá los archivos.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del último archivo entregado
No preguntes si el usuario quiere los archivos: simplemente entregalos siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: src/app.spec.ts ===
import 'reflect-metadata';
import request from 'supertest';
import { App } from './app';
import { container } from './config/inversify.config';
import TYPES from './core/types';

describe('Express App', () => {
    let testApp: App;

    beforeAll(() => {
        testApp = new App();
        const productService = container.get(TYPES.ProductService);
        const productRoutes = container.get<any>(TYPES.ProductRoutes);
        testApp.initializeRoutes(productRoutes);
    });

    it('should respond to health check', async () => {
        const response = await request(testApp.getApp()).get('/health');
        expect(response.status).toBe(200);
        expect(response.body.status).toBe('OK');
    });

    it('should return 404 for unknown routes', async () => {
        const response = await request(testApp.getApp()).get('/unknown-route');
        expect(response.status).toBe(404);
    });

    it('should have the product routes mounted', async () => {
        const response = await request(testApp.getApp()).get('/products');
        expect(response.status).not.toBe(404);
    });

    it('should create a product', async () => {
        const newProduct = {
            name: 'Test Product',
            price: 99.99,
            description: 'Test description',
            category: 'Electronics'
        };
        
        const response = await request(testApp.getApp())
            .post('/products')
            .send(newProduct)
            .set('Content-Type', 'application/json');
        
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe(newProduct.name);
    });

    it('should get a product by id', async () => {
        const newProduct = {
            name: 'Product to Get',
            price: 50.00,
            description: 'Will be retrieved',
            category: 'Books'
        };
        
        const createResponse = await request(testApp.getApp())
            .post('/products')
            .send(newProduct)
            .set('Content-Type', 'application/json');
        
        const productId = createResponse.body.id;
        
        const getResponse = await request(testApp.getApp()).get(`/products/${productId}`);
        expect(getResponse.status).toBe(200);
        expect(getResponse.body.id).toBe(productId);
    });

    it('should update a product', async () => {
        const newProduct = {
            name: 'Original Name',
            price: 100.00,
            description: 'Original description',
            category: 'Clothing'
        };
        
        const createResponse = await request(testApp.getApp())
            .post('/products')
            .send(newProduct)
            .set('Content-Type', 'application/json');
        
        const productId = createResponse.body.id;
        
        const updateData = {
            name: 'Updated Name',
            price: 150.00
        };
        
        const updateResponse = await request(testApp.getApp())
            .put(`/products/${productId}`)
            .send(updateData)
            .set('Content-Type', 'application/json');
        
        expect(updateResponse.status).toBe(200);
        expect(updateResponse.body.name).toBe(updateData.name);
        expect(updateResponse.body.price).toBe(updateData.price);
    });

    it('should delete a product', async () => {
        const newProduct = {
            name: 'Product to Delete',
            price: 25.00,
            description: 'Will be deleted',
            category: 'Toys'
        };
        
        const createResponse = await request(testApp.getApp())
            .post('/products')
            .send(newProduct)
            .set('Content-Type', 'application/json');
        
        const productId = createResponse.body.id;
        
        const deleteResponse = await request(testApp.getApp()).delete(`/products/${productId}`);
        expect(deleteResponse.status).toBe(204);
        
        const getResponse = await request(testApp.getApp()).get(`/products/${productId}`);
        expect(getResponse.status).toBe(404);
    });
});

// === ARCHIVO: package.json ===
{
  "name": "reto-express",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "test": "jest"
  },
  "dependencies": {
    "@aws-sdk/client-dynamodb": "3.1170.0",
    "@aws-sdk/lib-dynamodb": "3.1170.0",
    "@types/inversify": "2.0.33",
    "@types/jest": "30.0.0",
    "@types/supertest": "7.2.1",
    "class-validator": "0.15.1",
    "express": "4.22.3",
    "inversify": "8.3.0",
    "jest": "30.5.2",
    "reflect-metadata": "0.2.2",
    "supertest": "7.3.2",
    "ts-jest": "29.4.15"
  },
  "devDependencies": {
    "@types/express": "4.17.25",
    "@types/node": "22.20.5",
    "typescript": "5.7.3"
  },
  "jest": {
    "preset": "ts-jest",
    "testEnvironment": "node"
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "node",
    "outDir": "dist",
    "strict": true,
    "strictPropertyInitialization": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "forceConsistentCasingInFileNames": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "types": [
      "node"
    ]
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "_pendiente",
    "tests",
    "test",
    "src/**/*.test.ts",
    "src/**/*.spec.ts"
  ]
}

// === ARCHIVO: src/config/dynamodb.ts ===
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand, GetCommand, UpdateCommand, DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { injectable } from 'inversify';

@injectable()
export class DynamoDBConfig {
    private readonly client: DynamoDBDocumentClient;

    constructor() {
        const dynamoDBClient = new DynamoDBClient({
            region: process.env.AWS_REGION || 'us-east-1',
            endpoint: process.env.DYNAMODB_ENDPOINT || 'http://localhost:8000',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'dummy',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'dummy'
            }
        });
        this.client = DynamoDBDocumentClient.from(dynamoDBClient);
    }

    getClient(): DynamoDBDocumentClient {
        return this.client;
    }

    async putItem(tableName: string, item: Record<string, unknown>): Promise<void> {
        const command = new PutCommand({
            TableName: tableName,
            Item: item
        });
        await this.client.send(command);
    }

    async getItem(tableName: string, key: Record<string, unknown>): Promise<Record<string, unknown> | undefined> {
        const command = new GetCommand({
            TableName: tableName,
            Key: key
        });
        const response = await this.client.send(command);
        return response.Item;
    }

    async updateItem(
        tableName: string,
        key: Record<string, unknown>,
        updateExpression: string,
        expressionAttributeValues: Record<string, unknown>
    ): Promise<Record<string, unknown> | undefined> {
        const command = new UpdateCommand({
            TableName: tableName,
            Key: key,
            UpdateExpression: updateExpression,
            ExpressionAttributeValues: expressionAttributeValues,
            ReturnValues: 'ALL_NEW'
        });
        const response = await this.client.send(command);
        return response.Attributes;
    }

    async deleteItem(tableName: string, key: Record<string, unknown>): Promise<void> {
        const command = new DeleteCommand({
            TableName: tableName,
            Key: key
        });
        await this.client.send(command);
    }
}

// === ARCHIVO: src/core/domain/Product.ts ===
import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator';

export class Product {
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    category: string;

    constructor(id: string, name: string, price: number, description: string, category: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }

    static fromDTO(dto: CreateProductDTO | UpdateProductDTO): Product {
        const id = 'id' in dto && dto.id ? dto.id : '';
        return new Product(
            id,
            dto.name || '',
            dto.price || 0,
            dto.description || '',
            dto.category || ''
        );
    }

    toResponseDTO(): ProductResponseDTO {
        return {
            id: this.id,
            name: this.name,
            price: this.price,
            description: this.description,
            category: this.category
        };
    }
}

export type CreateProductDTO = {
    name: string;
    price: number;
    description: string;
    category: string;
};

export type UpdateProductDTO = {
    id?: string;
    name?: string;
    price?: number;
    description?: string;
    category?: string;
};

export type ProductResponseDTO = {
    id: string;
    name: string;
    price: number;
    description: string;
    category: string;
};

// === ARCHIVO: src/core/application/services/ProductService.ts ===
import { injectable, inject } from 'inversify';
import { Product, CreateProductDTO, UpdateProductDTO, ProductResponseDTO } from '../../domain/Product';
import { ProductRepository } from '../ports/ProductRepository';
import { TYPES } from '../types';

@injectable()
export class ProductService {
    constructor(@inject(TYPES.ProductRepository) private productRepository: ProductRepository) {}

    async createProduct(productData: CreateProductDTO): Promise<ProductResponseDTO> {
        // TODO(reto): Implementar la lógica para crear un producto
        // Debe validar los datos de entrada y persistir el producto en DynamoDB
        throw new Error('Method not implemented');
    }

    async getProduct(id: string): Promise<ProductResponseDTO> {
        // TODO(reto): Implementar la lógica para obtener un producto por ID
        // Debe manejar el caso cuando el producto no existe
        throw new Error('Method not implemented');
    }

    async updateProduct(id: string, productData: UpdateProductDTO): Promise<ProductResponseDTO> {
        // TODO(reto): Implementar la lógica para actualizar un producto
        // Debe validar los datos de entrada y manejar el caso cuando el producto no existe
        throw new Error('Method not implemented');
    }

    async deleteProduct(id: string): Promise<void> {
        // TODO(reto): Implementar la lógica para eliminar un producto
        // Debe manejar el caso cuando el producto no existe
        throw new Error('Method not implemented');
    }
}

// === ARCHIVO: src/core/application/ports/ProductRepository.ts ===
import { Product } from '../../domain/Product';

export interface ProductRepository {
    create(product: Product): Promise<Product>;
    findById(id: string): Promise<Product | null>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<void>;
}

// === ARCHIVO: src/inbound-adapter/routes/productRoutes.ts ===
import { Router } from 'express';
import { injectable, inject } from 'inversify';
import { ProductService } from '../../core/application/services/ProductService';
import { CreateProductDTO, UpdateProductDTO } from '../../core/domain/Product';
import TYPES from '../../core/types';

@injectable()
export class ProductRoutes {
    private router: Router;

    constructor(@inject(TYPES.ProductService) private productService: ProductService) {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post('/', this.createProduct.bind(this));
        this.router.get('/:id', this.getProduct.bind(this));
        this.router.put('/:id', this.updateProduct.bind(this));
        this.router.delete('/:id', this.deleteProduct.bind(this));
    }

    private async createProduct(req: any, res: any, next: any): Promise<void> {
      throw new Error('TODO(reto): createProduct');
    }

    private async getProduct(req: any, res: any, next: any): Promise<void> {
      throw new Error('TODO(reto): getProduct');
    }

    private async updateProduct(req: any, res: any, next: any): Promise<void> {
      throw new Error('TODO(reto): updateProduct');
    }

    private async deleteProduct(req: any, res: any, next: any): Promise<void> {
      throw new Error('TODO(reto): deleteProduct');
    }

    public getRouter(): Router {
        return this.router;
    }
}

// === ARCHIVO: src/outbound-adapter/repositories/ProductRepositoryImpl.ts ===
import { inject, injectable } from 'inversify';
import { DynamoDBConfig } from '../../config/dynamodb';
import { Product } from '../../core/domain/Product';
import { ProductRepository } from '../../core/application/ports/ProductRepository';
import { TYPES } from '../../config/types';

@injectable()
export class ProductRepositoryImpl implements ProductRepository {
    private readonly tableName = 'products';

    constructor(
        @inject(TYPES.DynamoDBConfig) private dynamoDBConfig: DynamoDBConfig
    ) {}

    async create(product: Product): Promise<Product> {
        // TODO(reto): Implementar la creación de producto en DynamoDB
        throw new Error('Method not implemented');
    }

    async findById(id: string): Promise<Product | null> {
        // TODO(reto): Implementar la búsqueda de producto por ID en DynamoDB
        throw new Error('Method not implemented');
    }

    async update(id: string, product: Product): Promise<Product> {
        // TODO(reto): Implementar la actualización de producto en DynamoDB
        throw new Error('Method not implemented');
    }

    async delete(id: string): Promise<void> {
        // TODO(reto): Implementar la eliminación de producto en DynamoDB
        throw new Error('Method not implemented');
    }
}

// === ARCHIVO: src/main.ts ===
import 'reflect-metadata';
import { Container } from 'inversify';
import { App } from './app';
import { ProductRepositoryImpl } from './outbound-adapter/repositories/ProductRepositoryImpl';
import { ProductService } from './core/application/services/ProductService';
import { ProductRoutes } from './inbound-adapter/routes/productRoutes';
import { DynamoDBConfig } from './config/dynamodb';
import { ProductRepository } from './core/application/ports/ProductRepository';
import TYPES from './core/types';

const container = new Container();

container.bind<DynamoDBConfig>(TYPES.DynamoDBConfig).to(DynamoDBConfig).inSingletonScope();
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl).inSingletonScope();
container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();
container.bind<ProductRoutes>(TYPES.ProductRoutes).to(ProductRoutes).inSingletonScope();

const app = container.get<App>(App);
const productRoutes = container.get<ProductRoutes>(TYPES.ProductRoutes);

app.initializeRoutes(productRoutes);

const server = app.start();

export { server, container };

// === ARCHIVO: src/app.ts ===
import express, { Application, Request, Response, NextFunction } from 'express';
import { ProductRoutes } from './inbound-adapter/routes/productRoutes';
import TYPES from './core/types';
import { container } from './config/inversify.config';

export class App {
    private app: Application;
    private port: number;

    constructor() {
        this.app = express();
        this.port = parseInt(process.env.PORT || '3000', 10);
        this.initializeMiddlewares();
        this.initializeErrorHandling();
    }

    private initializeMiddlewares(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    private initializeErrorHandling(): void {
        this.app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error('Error capturado:', err.message);
            console.error('Stack:', err.stack);
            
            if (res.headersSent) {
                return next(err);
            }

            res.status(500).json({
                error: 'Error interno del servidor',
                message: err.message,
                status: 500
            });
        });
    }

    public initializeRoutes(productRoutes: ProductRoutes): void {
        this.app.use('/products', productRoutes.getRouter());
        
        this.app.get('/health', (req: Request, res: Response) => {
            res.status(200).json({
                status: 'OK',
                timestamp: new Date().toISOString(),
                service: 'product-api'
            });
        });

        this.app.use((req: Request, res: Response) => {
            res.status(404).json({
                error: 'Ruta no encontrada',
                path: req.path,
                status: 404
            });
        });
    }

    public start(): any {
        return this.app.listen(this.port, () => {
            console.log(`Servidor Express arrancado en el puerto ${this.port}`);
            console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
            console.log(`Health check disponible en: http://localhost:${this.port}/health`);
        });
    }

    public getApp(): Application {
        return this.app;
    }
}

const appInstance = new App();
export const app = appInstance;
export default appInstance;

// === ARCHIVO: src/server.ts ===
import { App } from './app';
import { container } from './main';
import { ProductRoutes } from './inbound-adapter/routes/productRoutes';
import TYPES from './core/types';

const productRoutes = container.get<ProductRoutes>(TYPES.ProductRoutes);
const app = container.get<App>(App);

app.initializeRoutes(productRoutes);

const server = app.start();

export default server;

// === ARCHIVO: src/config/inversify.config.ts ===
import { Container } from 'inversify';
import { ProductService } from '../core/application/services/ProductService';
import { ProductRepository } from '../core/application/ports/ProductRepository';
import { ProductRepositoryImpl } from '../outbound-adapter/repositories/ProductRepositoryImpl';
import { DynamoDBConfig } from './dynamodb';
import TYPES from '../core/types';

const container = new Container();

container.bind(TYPES.DynamoDBConfig).to(DynamoDBConfig).inSingletonScope();
container.bind<ProductRepository>(TYPES.ProductRepository).to(ProductRepositoryImpl).inSingletonScope();
container.bind<ProductService>(TYPES.ProductService).to(ProductService).inSingletonScope();

export { container };

// === ARCHIVO: src/core/types.ts ===
const TYPES = {
    ProductService: Symbol.for('ProductService'),
    ProductRepository: Symbol.for('ProductRepository'),
    DynamoDBConfig: Symbol.for('DynamoDBConfig'),
};

export default TYPES;

// === ARCHIVO: src/core/application/types.ts ===
export const TYPES = {
    ProductRepository: Symbol.for('ProductRepository'),
    ProductService: Symbol.for('ProductService'),
    DynamoDBConfig: Symbol.for('DynamoDBConfig'),
};

// === ARCHIVO: src/config/types.ts ===
export const TYPES = {
    ProductService: Symbol.for('ProductService'),
    ProductRepository: Symbol.for('ProductRepository'),
    DynamoDBConfig: Symbol.for('DynamoDBConfig'),
};

// === ARCHIVO: docker-compose.yml ===
# Infraestructura local del reto. SOLO desarrollo: credenciales de ejemplo (local-dev-only), puertos en loopback.
# Levantar: docker compose up -d --wait
name: infra-local
services:
  dynamodb-local:
    image: "amazon/dynamodb-local:2.5.2"
    command: ["-jar","DynamoDBLocal.jar","-sharedDb","-inMemory"]
    ports:
      - "127.0.0.1:8000:8000"
    healthcheck:
      test: ["CMD-SHELL","bash -c ':> /dev/tcp/127.0.0.1/8000' || exit 1"]
      interval: 10s
      timeout: 5s
      retries: 10
      start_period: 5s


// === ARCHIVO: infra-local/README.md ===
# Infraestructura local

Servicios de soporte para el reto, definidos en `docker-compose.yml` (raiz del repo).

```bash
docker compose up -d --wait
```

| Servicio | Imagen | Puertos (host) |
|---|---|---|
| DynamoDB Local | `amazon/dynamodb-local:2.5.2` | 8000 |

Credenciales: solo de desarrollo local (`local-dev-only`, `local`). No son secretos ni deben reutilizarse.
Los scripts de `infra-local/` (tablas, topics) se ejecutan con el compose en estado healthy.


// === ARCHIVO: infra-local/dynamodb/create-tables.sh ===
#!/usr/bin/env bash
# Crea las tablas en DynamoDB Local (idempotente). Credenciales dummy: DynamoDB Local no valida firmas.
set -euo pipefail

export AWS_ACCESS_KEY_ID=local
export AWS_SECRET_ACCESS_KEY=local
export AWS_REGION=us-east-1
ENDPOINT="${DYNAMODB_ENDPOINT:-http://localhost:8000}"

create_table() {
  local name="$1" pk="$2" sk="${3:-}"
  if aws dynamodb describe-table --table-name "$name" --endpoint-url "$ENDPOINT" >/dev/null 2>&1; then
    echo "Tabla $name ya existe"
    return
  fi
  local attrs="AttributeName=$pk,AttributeType=S"
  local keys="AttributeName=$pk,KeyType=HASH"
  if [ -n "$sk" ]; then
    attrs="$attrs AttributeName=$sk,AttributeType=S"
    keys="$keys AttributeName=$sk,KeyType=RANGE"
  fi
  # shellcheck disable=SC2086
  aws dynamodb create-table --table-name "$name" --attribute-definitions $attrs --key-schema $keys \
    --billing-mode PAY_PER_REQUEST --endpoint-url "$ENDPOINT" >/dev/null
  echo "Tabla $name creada"
}

create_table "app-items" "id"

```
