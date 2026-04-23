import { KnexUserRepository } from "../repositories/KnexUserRepository";
import { createUserService } from "../services/createUserService";
import { deleteUserService } from "../services/deleteUserService";
import { getUserByIdService } from "../services/getUserByIdService";
import { listUsersService } from "../services/listUsersService";
import { updateUserService } from "../services/updateUserService";

export async function createUser(name: string, email: string) {
    try {

        const repository = new KnexUserRepository();

        const result = await createUserService(repository, name, email);

        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function listUsers() {
    try {
        const users = await listUsersService();
        return users;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function getUserById(id: number) {
    try {
        const user = await getUserByIdService(id);
        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function updateUser(
    id: number,
    data: {
        name?: string;
        email?: string;
    }
) {
    try {
        const updated = await updateUserService(id, data);
        return updated;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export async function deleteUser(id: number) {
    try {
        const result = await deleteUserService(id);
        return result;
    } catch (error: any) {
        throw new Error(error.message);
    }
}