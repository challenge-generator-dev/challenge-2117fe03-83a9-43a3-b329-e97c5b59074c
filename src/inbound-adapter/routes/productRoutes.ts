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