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