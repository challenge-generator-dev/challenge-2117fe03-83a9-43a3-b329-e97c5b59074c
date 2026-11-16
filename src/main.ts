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