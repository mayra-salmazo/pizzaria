import prismaClient from "../../prisma";

class FinalizeOrderService {
    async execute(orderId: string) {
        const order = await prismaClient.pedido.findUnique({
            where: { id: orderId },
        });

        if (!order) {
            throw new Error('Order not found');
        }

        if (!order.rascunho) {
            throw new Error('Order is already finalized');
        }

        const updatedOrder = await prismaClient.pedido.update({
            where: { id: orderId },
            data: { rascunho: false },
        });

        return updatedOrder;
    }
}

export { FinalizeOrderService };
