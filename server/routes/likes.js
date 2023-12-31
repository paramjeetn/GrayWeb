import express from "express"
import { getlikes,postlikes,deletelikes} from "../controllers/like.js";
const router=express.Router();

router.get("/", getlikes);
router.post("/", postlikes);
router.delete("/", deletelikes);



export default router;