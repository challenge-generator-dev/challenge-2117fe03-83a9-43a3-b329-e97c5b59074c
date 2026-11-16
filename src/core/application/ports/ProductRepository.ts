import { Product } from '../../domain/Product';

export interface ProductRepository {
    create(product: Product): Promise<Product>;
    findById(id: string): Promise<Product | null>;
    update(id: string, product: Product): Promise<Product>;
    delete(id: string): Promise<void>;
}