import { db } from "../database/connection";
import { IUserRepository } from "./IUserRepository";

export class KnexUserRepository implements IUserRepository {
    async findByEmail(email: string): Promise<any> {
        return await db("users").where({ email }).first();
    }

    async create(data: { name: string; email: string; }): Promise<void> {
        await db("users").insert(data);
    }
}