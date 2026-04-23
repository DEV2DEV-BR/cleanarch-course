import { db } from "../database/connection";

export async function listUsersService() {
    const users = await db("users").select("id", "name", "email", "created_at", "updated_at");
    return users;
}
