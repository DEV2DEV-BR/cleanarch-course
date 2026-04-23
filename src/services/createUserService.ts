import { IUserRepository } from "../repositories/IUserRepository";

export async function createUserService(userRepository: IUserRepository, name: string, email: string) {
    if (!name || !email) {
        throw new Error("name e email são obrigatórios");
    }

    const existing = await userRepository.findByEmail(email);

    if (existing) {
        throw new Error("email já cadastrado");
    }

    await userRepository.create({ name, email });

    return {
        ok: true
    }
}