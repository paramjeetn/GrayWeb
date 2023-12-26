import express from "express"
import { like} from "../controllers/like.js";
const router=express.Router();

router.get("/like", like);


export default router;