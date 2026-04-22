import express, { Request, Response } from "express";
import { createUser, deleteUser, getUserById, listUsers, updateUser } from "./controllers/userController";

const app = express();
app.use(express.json());

app.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body;
        const result = await createUser(name, email)
        return res.json(result);
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
});

app.get("/users", async (_req: Request, res: Response) => {
    try {
        const users = await listUsers();
        return res.json(users);
    } catch (error: any) {
        return res.status(400).json({ error: error.message });
    }
});

app.get("/users/:id", async (req: Request, res: Response) => {
    try {
        const user = await getUserById(Number(req.params.id));
        return res.json(user);
    } catch (error: any) {
        const message = error?.message ?? "erro inesperado";
        if (message === "usuário não encontrado") return res.status(404).json({ error: message });
        return res.status(400).json({ error: message });
    }
});

app.put("/users/:id", async (req: Request, res: Response) => {
    try {
        const { name, email } = req.body as { name?: string; email?: string };
        const user = await updateUser(Number(req.params.id), { name, email });
        return res.json(user);
    } catch (error: any) {
        const message = error?.message ?? "erro inesperado";
        if (message === "usuário não encontrado") return res.status(404).json({ error: message });
        if (message === "email já cadastrado") return res.status(409).json({ error: message });
        return res.status(400).json({ error: message });
    }
});

app.delete("/users/:id", async (req: Request, res: Response) => {
    try {
        await deleteUser(Number(req.params.id));
        return res.status(204).send();
    } catch (error: any) {
        const message = error?.message ?? "erro inesperado";
        if (message === "usuário não encontrado") return res.status(404).json({ error: message });
        return res.status(400).json({ error: message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});