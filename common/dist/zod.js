"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpInput = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signUpInput = zod_1.default.object({
    username: zod_1.default.string(),
    firstName: zod_1.default.string(),
    lastName: zod_1.default.string(),
    mobileNumber: zod_1.default.string(),
    password: zod_1.default.string().min(7)
});
