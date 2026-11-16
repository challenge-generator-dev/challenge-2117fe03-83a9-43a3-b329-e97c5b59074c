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