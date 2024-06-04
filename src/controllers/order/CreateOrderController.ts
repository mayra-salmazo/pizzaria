import { Request, Response } from 'express';
import { CreateOrderService } from '../../services/order/CreateOrderService';

class CreateOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { mesa: mesa, nome: nome } = req.body;
        const service = new CreateOrderService();
        
        const order = await service.execute({ mesa, nome });
        return res.json({ order });
    }
}

export { CreateOrderController };
