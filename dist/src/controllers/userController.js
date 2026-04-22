"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
exports.listUsers = listUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
const connection_1 = require("../database/connection");
async function createUser(req, res) {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: "name e email são obrigatórios" });
    }
    const existing = await (0, connection_1.db)("users").where({ email }).first();
    if (existing) {
        return res.status(409).json({ error: "email já cadastrado" });
    }
    await (0, connection_1.db)("users").insert({
        name,
        email
    });
    return res.json({ ok: true });
}
async function listUsers(_req, res) {
    const users = await (0, connection_1.db)("users").select("id", "name", "email", "created_at", "updated_at");
    return res.json(users);
}
async function getUserById(req, res) {
    const { id } = req.params;
    const user = await (0, connection_1.db)("users")
        .where({ id: Number(id) })
        .first()
        .select("id", "name", "email", "created_at", "updated_at");
    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }
    return res.json(user);
}
async function updateUser(req, res) {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await (0, connection_1.db)("users").where({ id: Number(id) }).first();
    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }
    if (email) {
        const emailOwner = await (0, connection_1.db)("users").where({ email }).first();
        if (emailOwner && Number(emailOwner.id) !== Number(id)) {
            return res.status(409).json({ error: "email já cadastrado" });
        }
    }
    const updates = {};
    if (name !== undefined)
        updates.name = name;
    if (email !== undefined)
        updates.email = email;
    updates.updated_at = connection_1.db.fn.now();
    await (0, connection_1.db)("users").where({ id: Number(id) }).update(updates);
    const updated = await (0, connection_1.db)("users")
        .where({ id: Number(id) })
        .first()
        .select("id", "name", "email", "created_at", "updated_at");
    return res.json(updated);
}
async function deleteUser(req, res) {
    const { id } = req.params;
    const user = await (0, connection_1.db)("users").where({ id: Number(id) }).first();
    if (!user) {
        return res.status(404).json({ error: "usuário não encontrado" });
    }
    await (0, connection_1.db)("users").where({ id: Number(id) }).delete();
    return res.status(204).send();
}
//# sourceMappingURL=userController.js.map