import { Request, Response } from 'express';
import { FinalizeOrderService } from '../../services/order/FinalizeOrderService';

class FinalizeOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { orderId } = req.params;
        const service = new FinalizeOrderService();

        try {
            const result = await service.execute(orderId);
            return res.json(result);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Erro';
            return res.status(400).json({ message });
        }
    }
}

export { FinalizeOrderController };
