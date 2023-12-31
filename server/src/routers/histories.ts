import { Router } from "express";
import { verifyAuth } from "../middleware/auth";
import { getAllHistories, getRecentlyPlayed, removeHistory, updateHistory } from "../controller";
import { updateHistoryValidation } from "../utils";
import { validator } from "../middleware/validator";

export const historiesRouter = Router();

historiesRouter.post("/", verifyAuth, validator(updateHistoryValidation), updateHistory);
historiesRouter.delete("/", verifyAuth, removeHistory);
historiesRouter.get("/", verifyAuth, getAllHistories);
historiesRouter.get("/recently-played", verifyAuth, getRecentlyPlayed);
