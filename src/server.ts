import { App } from './app';
import { container } from './main';
import { ProductRoutes } from './inbound-adapter/routes/productRoutes';
import TYPES from './core/types';

const productRoutes = container.get<ProductRoutes>(TYPES.ProductRoutes);
const app = container.get<App>(App);

app.initializeRoutes(productRoutes);

const server = app.start();

export default server;