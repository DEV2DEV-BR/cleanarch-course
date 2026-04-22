import { db } from "../database/connection";

type UpdateUserInput = {
    name?: string;
    email?: string;
};

export async function updateUserService(id: number, { name, email }: UpdateUserInput) {
    if (!id || Number.isNaN(id)) {
        throw new Error("id inválido");
    }

    const user = await db("users").where({ id: Number(id) }).first();
    if (!user) {
        throw new Error("usuário não encontrado");
    }

    if (email) {
        const emailOwner = await db("users").where({ email }).first();
        if (emailOwner && Number(emailOwner.id) !== Number(id)) {
            throw new Error("email já cadastrado");
        }
    }

    const updates: Record<string, unknown> = {};
    if (name !== undefined) updates.name = name;
    if (email !== undefined) updates.email = email;
    updates.updated_at = db.fn.now();

    await db("users").where({ id: Number(id) }).update(updates);

    const updated = await db("users")
        .where({ id: Number(id) })
        .first()
        .select("id", "name", "email", "created_at", "updated_at");

    return updated;
}
