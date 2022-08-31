"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const VerifyToken = (req, res, next) => {
    try {
        const token = req.headers['token'];
        if (!token) {
            return res.json({ message: 'You do not have token to access this route' });
        }
        jsonwebtoken_1.default.verify(token, process.env.KEY, (error, data) => {
            if (data) {
                res.status(200).json({ data });
                next();
            }
            return res.json({ message: 'The token is incorrect' });
        });
    }
    catch (error) {
        return res.json({ error });
    }
};
exports.VerifyToken = VerifyToken;
