import { db } from "../database/connection";

export async function deleteUserService(id: number) {
    if (!id || Number.isNaN(id)) {
        throw new Error("id inválido");
    }

    const user = await db("users").where({ id: Number(id) }).first();
    if (!user) {
        throw new Error("usuário não encontrado");
    }

    await db("users").where({ id: Number(id) }).delete();
    return { ok: true };
}
