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