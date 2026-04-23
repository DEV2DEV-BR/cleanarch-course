export interface IUserRepository {
    findByEmail(email: string): Promise<any>;
    create(data: { name: string, email: string }): Promise<void>;
}