class Appointment {
  constructor(
    public readonly userId: string,
    public readonly barberId: string,
    public readonly date: AppointmentDate,
  ) {}

  isValid() {
    return this.date.getValue() > new Date();
  }

  canBeSchedule() {
    return true;
  }
}

class AppointmentDate {
  constructor(private readonly value: Date) {
    if (value < new Date()) {
      throw new Error("Data não pode ser no passado");
    }
  }

  getValue() {
    return this.value;
  }
}

interface IAppointmentRepository {
  save(appointment: Appointment): Promise<void>;
}

class InMemoryAppointmentRepository implements IAppointmentRepository {
  async save(appointment: Appointment): Promise<void> {
    console.log("Salvado no banco de dados...", appointment);
  }
}

class ScheduleAppointmentUseCase {
  constructor(private repository: IAppointmentRepository) {}

  async execute(input: { userId: string; barberId: string; date: Date }) {
    const appointment = new Appointment(
      input.userId,
      input.barberId,
      new AppointmentDate(input.date),
    );

    if (!appointment.canBeSchedule()) {
      throw new Error("Nâo pode agendar");
    }

    await this.repository.save(appointment);

    return { success: true };
  }
}

async function main() {
  const appointmentUseCase = new ScheduleAppointmentUseCase(
    new InMemoryAppointmentRepository(),
  );

  await appointmentUseCase.execute({
    userId: "user-1",
    barberId: "barber-1",
    date: new Date(Date.now() + 100000),
  });
}

main();
