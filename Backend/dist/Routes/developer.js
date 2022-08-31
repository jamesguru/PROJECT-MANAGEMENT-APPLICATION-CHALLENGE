"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Developer_1 = require("../Controllers/Developer");
const Verifytoken_1 = require("../Middlewares/Verifytoken");
const router = (0, express_1.Router)();
router.get("/", Verifytoken_1.VerifyToken, Developer_1.getAllDevelopers);
router.put("/:id", Verifytoken_1.VerifyToken, Developer_1.assignTaskToDeveloper);
exports.default = router;
