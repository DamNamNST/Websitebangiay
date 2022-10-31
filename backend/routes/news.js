import { Router } from "express";
import { create, list, read, remove, update } from "../controllers/news";
import { userById } from "../controllers/user";
import { isAdmin, isAuth, requireSignin } from "../middlewares/checkUser";

const router = Router();

router.post("/news",  create);
router.get("/news/::id", read);
router.get("/news", list);
router.put("/news/:id/",  update);
router.delete("/news/:id", remove);


export default router;