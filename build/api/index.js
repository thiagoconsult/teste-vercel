"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    return res.json({ message: "Home" });
});
app.use((req, res, next) => {
    res.sendStatus(404);
});
app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
});
