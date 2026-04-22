import { db } from "../database/connection";

export async function getUserByIdService(id: number) {
    if (!id || Number.isNaN(id)) {
        throw new Error("id inválido");
    }

    const user = await db("users")
        .where({ id: Number(id) })
        .first()
        .select("id", "name", "email", "created_at", "updated_at");

    if (!user) {
        throw new Error("usuário não encontrado");
    }

    return user;
}
