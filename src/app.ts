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