
import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/contact";
import { userById } from "../controllers/user";

const router = Router();

router.post("/contact", create);
router.get("/contact/:id", read);
router.get("/contact", list);
router.put("/contact/:id", update);
router.delete("/contact/:id", remove);

router.param("userId", userById)

export default router;