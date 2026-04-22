"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    client: "sqlite3",
    connection: {
        filename: "./database.sqlite"
    },
    useNullAsDefault: true,
    migrations: {
        directory: "./src/database/migrations"
    }
};
exports.default = config;
//# sourceMappingURL=knexfile.js.map