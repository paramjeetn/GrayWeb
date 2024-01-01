import express from "express"
import { getRelationship,postRelationship,deleteRelationship} from "../controllers/relationship.js";
const router=express.Router();

router.get("/", getRelationship);
router.post("/", postRelationship);
router.delete("/", deleteRelationship);



export default router;