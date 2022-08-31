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
const ejs_1 = __importDefault(require("ejs"));
const dotenv_1 = __importDefault(require("dotenv"));
const SendEmail_1 = __importDefault(require("../Helpers/SendEmail"));
dotenv_1.default.config();
const sendCompleteEmail = (name) => __awaiter(void 0, void 0, void 0, function* () {
    ejs_1.default.renderFile('templates/completeproject.ejs', { name }, (err, data) => __awaiter(void 0, void 0, void 0, function* () {
        let messageoption = {
            from: process.env.EMAIL,
            to: process.env.ADMIN_EMAIL,
            subject: `${name} have completed project`,
            html: data,
            attachments: [{
                    filename: 'project.txt',
                    content: 'I have completed project successfully'
                }]
        };
        try {
            (0, SendEmail_1.default)(messageoption);
        }
        catch (error) {
            console.log(err);
        }
    }));
});
exports.default = sendCompleteEmail;
