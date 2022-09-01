"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Developer_1 = require("../Controllers/Developer");
const router = (0, express_1.Router)();
router.get("/", Developer_1.getAllDevelopers);
router.put("/:id", Developer_1.assignTaskToDeveloper);
exports.default = router;
