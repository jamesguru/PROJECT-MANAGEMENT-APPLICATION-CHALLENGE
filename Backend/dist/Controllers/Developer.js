"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTaskToDeveloper = exports.getAllDevelopers = void 0;
const connect_db_1 = require("../Helpers/connect_db");
const mssql_1 = __importDefault(require("mssql"));
const getAllDevelopers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pool = yield (0, connect_db_1.connectDB)();
        const developers = yield (pool === null || pool === void 0 ? void 0 : pool.request().execute('getAllDevelopers'));
        res.status(200).json({ developers: developers === null || developers === void 0 ? void 0 : developers.recordset });
    }
    catch (error) {
        res.status(500).json('something went wrong');
    }
});
exports.getAllDevelopers = getAllDevelopers;
const assignTaskToDeveloper = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dev_id = req.params.id;
    const { assigned } = req.body;
    try {
        const pool = yield (0, connect_db_1.connectDB)();
        const developer = yield (pool === null || pool === void 0 ? void 0 : pool.request().input('id', mssql_1.default.Int, dev_id).input('assigned', mssql_1.default.NVarChar, assigned).execute('updateDeveloper'));
        res.status(201).json(developer);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.assignTaskToDeveloper = assignTaskToDeveloper;
