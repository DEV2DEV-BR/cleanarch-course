type AppointmentInput = {
  userId: string;
  barberId: string;
  date: Date;
};

class AppointmentService {
  async schedule(data: AppointmentInput) {
    if (!data.userId || !data.barberId) {
      throw new Error("Dados inválidos");
    }

    if (data.date < new Date()) {
      throw new Error("Data inválida");
    }

    console.log("Salvando no banco...");
    return { success: true };
  }
}

async function main() {
  const appointmentService = new AppointmentService();

  await appointmentService.schedule({
    userId: "user-1",
    barberId: "barber-1",
    date: new Date(Date.now() + 100000),
  });
}

main();
