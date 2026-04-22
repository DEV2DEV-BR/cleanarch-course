"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./controllers/userController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/users", userController_1.createUser);
app.get("/users", userController_1.listUsers);
app.get("/users/:id", userController_1.getUserById);
app.put("/users/:id", userController_1.updateUser);
app.delete("/users/:id", userController_1.deleteUser);
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map