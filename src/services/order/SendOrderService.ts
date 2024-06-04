import prismaClient from "../../prisma";

interface OrderRequest {
    orderId: string;
}

class SendOrderService {
    async execute({ orderId }: OrderRequest) {
        const updatedOrder = await prismaClient.pedido.update({
            where: { id: orderId },
            data: { rascunho: false },
        });

        return updatedOrder;
    }
}

export { SendOrderService };
