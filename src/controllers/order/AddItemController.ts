import { Request, Response } from 'express';
import { AddItemService } from '../../services/order/AddItemService';

class AddItemController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { quantidade, id_pedido, id_produto } = req.body;
        const service = new AddItemService();
        
        const item = await service.execute({ quantidade, id_produto, id_pedido });

        return res.json(item);
    }
}

export { AddItemController };
