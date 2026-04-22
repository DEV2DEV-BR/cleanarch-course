import { db } from "../database/connection";

export async function createUserService(name: string, email: string) {
    if (!name || !email) {
        throw new Error("name e email são obrigatórios");
    }

    const existing = await db("users").where({ email }).first();
    if (existing) {
        throw new Error("email já cadastrado");
    }

    await db("users").insert({
        name,
        email
    });


    return {
        ok: true
    }
}