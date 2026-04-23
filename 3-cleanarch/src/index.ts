import express from "express";
import { createUser, deleteUser, getUserById, listUsers, updateUser } from "./controllers/userController";

const app = express();
app.use(express.json());

app.post("/users", createUser);
app.get("/users", listUsers);
app.get("/users/:id", getUserById);
app.put("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});