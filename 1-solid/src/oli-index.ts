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

// ---------------------------------------------

class OrderValidator {
  validate(data: OrderInput) {
    if (!data.userId) {
      throw new Error("User is required");
    }
  }
}

class OrderRepository {
  async save(data: OrderInput, dbType: "postgres" | "mysql"): Promise<void> {
    if (dbType === "mysql") {
      console.log("Save in mysql");
    } else {
      console.log("Save in postgres");
    }
  }
}

class CreateOrder {
  constructor(
    private validator: OrderValidator,
    private repository: OrderRepository,
    private email: EmailService,
  ) {}

  async execute(data: OrderInput) {
    this.validator.validate(data);

    await this.repository.save(data, "postgres");
    await this.email.send(data.userId, "Pedido criado");

    return { success: true };
  }
}

async function main() {
  const orderValidator = new OrderValidator();
  const orderRepository = new OrderRepository();
  const emailService = new EmailService();

  const createOrder = new CreateOrder(
    orderValidator,
    orderRepository,
    emailService,
  );

  const result = await createOrder.execute({
    userId: "user-123",
    items: ["item-1"],
  });
  console.log(result);
}

void main();
