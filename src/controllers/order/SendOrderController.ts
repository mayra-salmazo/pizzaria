import { Request, Response } from 'express';
import { SendOrderService } from '../../services/order/SendOrderService';

class SendOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { order_id: orderId } = req.body;
        const service = new SendOrderService();

        try {
            const result = await service.execute({ orderId });
            return res.json(result);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Erro desconhecido ao enviar o pedido';
            return res.status(500).json({ message: 'Erro ao enviar o pedido', error: message });
        }
    }
}

export { SendOrderController };
