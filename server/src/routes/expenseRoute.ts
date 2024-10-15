import { Router } from "express";
import { getExpesesByCategory } from "../controllers/expenseController";

const router = Router()

router.get('/', getExpesesByCategory)

export default router