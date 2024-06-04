import { Request, Response } from 'express';
import { CloseOrderService } from '../../services/order/CloseOrderService';

class CloseOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { orderId } = req.params;
        const service = new CloseOrderService();

        try {
            const result = await service.execute(orderId);
            return res.json(result);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown error';
            return res.status(400).json({ message });
        }
    }
}

export { CloseOrderController };
