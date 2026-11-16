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