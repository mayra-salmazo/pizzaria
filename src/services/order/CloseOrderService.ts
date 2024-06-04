import prismaClient from "../../prisma";

class CloseOrderService {
    async execute(orderId: string) {
        const order = await prismaClient.pedido.findUnique({
            where: { id: orderId },
            include: {
                items: {
                    include: { Produto: true }
                }
            }
        });

        if (!order) {
            throw new Error('Order not found');
        }

        const totalAmount = order.items.reduce((sum, item) => {
            return item.Produto ? sum + item.quantidade * parseFloat(item.Produto.preco) : sum;
        }, 0);

        const updatedOrder = await prismaClient.pedido.update({
            where: { id: orderId },
            data: { rascunho: false },
        });

        return { ...updatedOrder, total: totalAmount };
    }
}

export { CloseOrderService };
