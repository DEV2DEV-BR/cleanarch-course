type OrderInput = {
    userId: string;
    [key: string]: unknown;
};

class PostgresDatabase {
    async save(table: string, data: unknown): Promise<void> {
        // Mock de persistência
        await Promise.resolve();
        console.log(`[db] save table=${table}`, data);
    }
}

class EmailService {
    async send(userId: string, message: string): Promise<void> {
        // Mock de envio de email
        await Promise.resolve();
        console.log(`[email] to=${userId} msg="${message}"`);
    }
}

class OrderService {
    async createOrder(data: OrderInput) {
        // validação
        if (!data.userId) {
            throw new Error("User is required");
        }

        // salvar no banco (acoplado)
        const db = new PostgresDatabase();
        await db.save("orders", data);

        // enviar email
        const emailService = new EmailService();
        await emailService.send(data.userId, "Pedido criado");

        return { success: true };
    }
}

async function main() {
    const service = new OrderService();
    const result = await service.createOrder({ userId: "user-123", items: ["item-1"] });
    console.log(result);
}

void main();