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
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map