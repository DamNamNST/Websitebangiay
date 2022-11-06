import { Router } from "express";
import { createSize, listSize, remove, update } from "../controllers/size";
import { userById } from "../controllers/user";

const router = Router();

router.post("/size", createSize);
router.get("/size", listSize);
router.put("/size/:id", update);
router.delete("/size/:id",remove);

router.param("userId", userById)

export default router;