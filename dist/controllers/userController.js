"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const connection_1 = require("../database/connection");
async function createUser(req, res) {
    const { name, email } = req.body;
    await (0, connection_1.db)("users").insert({
        name,
        email
    });
    return res.json({ ok: true });
}
//# sourceMappingURL=userController.js.map