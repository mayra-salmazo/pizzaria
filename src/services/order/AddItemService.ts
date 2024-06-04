import prismaClient from "../../prisma";

interface ItemRequest {
    quantidade: number;
    id_produto: string;
    id_pedido: string;
}

class AddItemService {
    async execute(data: ItemRequest) {
        const { quantidade, id_produto, id_pedido } = data;
        const item = await prismaClient.item.create({
            data: {
                quantidade,
                produtoId: id_produto,
                pedidoId: id_pedido,
            }
        });

        return item;
    }
}

export { AddItemService };
