import express from "express"
import { getlikes} from "../controllers/like.js";
const router=express.Router();

router.get("/", getlikes);


export default router;