import { Request, Response } from "express";
import { db } from "../database/connection";

export async function createUser(req: Request, res: Response) {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ error: "name e email são obrigatórios" });
    }

    const existing = await db("users").where({ email }).first();
    if (existing) {
        return res.status(409).json({ error: "email já cadastrado" });
    }

    await db("users").insert({
        name,
        email
    });

    return res.json({ ok: true });
}

export async function listUsers(_req: Request, res: Response) {
    const users = await db("users").select("id", "name", "email", "created_at", "updated_at");
    return res.json(users);
}

export async function getUserById(req: Request, res: Response) {
    const { id } = req.params;

    const user = await db("users")
        .where({ id: Number(id) })
        .first()
        .select("id", "name", "email", "created_at", "updated_at");

    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }

    return res.json(user);
}

export async function updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body as { name?: string; email?: string };

    const user = await db("users").where({ id: Number(id) }).first();
    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }

    if (email) {
        const emailOwner = await db("users").where({ email }).first();
        if (emailOwner && Number(emailOwner.id) !== Number(id)) {
            return res.status(409).json({ error: "email já cadastrado" });
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

    return res.json(updated);
}

export async function deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    const user = await db("users").where({ id: Number(id) }).first();
    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }

    await db("users").where({ id: Number(id) }).delete();
    return res.status(204).send();
}