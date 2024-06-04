import prismaClient from "../../prisma";

interface OrderRequest {
    mesa: number;
    nome: string;
}

class CreateOrderService {
    async execute(data: OrderRequest) {
        const { mesa, nome } = data;
        const order = await prismaClient.pedido.create({
            data: {
                mesa: mesa,
                nome: nome
            }
        });

        return order;
    }
}

export { CreateOrderService };
