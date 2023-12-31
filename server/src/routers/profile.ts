import { Router } from "express";
import { isAuthenticated, verifyAuth } from "../middleware/auth";
import {
	getAudiosByPlaylist,
	getAutoGeneratedPlaylist,
	getFollowersProfile,
	getFollowersProfilePublic,
	getFollowingsProfile,
	getIsFollowing,
	getPrivateAudiosByPlaylist,
	getPublicPlaylist,
	getPublicProfile,
	getPublicUploads,
	getRecommendProfile,
	getUploads,
	updateFollower,
} from "../controller";

export const profileRouter = Router();

profileRouter.post("/update-follower/:profileId", verifyAuth, updateFollower);
profileRouter.get("/uploads", verifyAuth, getUploads);
profileRouter.get("/uploads/:profileId", getPublicUploads);
profileRouter.get("/info/:profileId", getPublicProfile);
profileRouter.get("/playlist/:profileId", getPublicPlaylist);
profileRouter.get("/recommended", isAuthenticated, getRecommendProfile);
profileRouter.get("/auto-generated-playlist", verifyAuth, getAutoGeneratedPlaylist);
profileRouter.get("/followers", verifyAuth, getFollowersProfile);
profileRouter.get("/followers/:profileId", verifyAuth, getFollowersProfilePublic);
profileRouter.get("/followings", verifyAuth, getFollowingsProfile);
profileRouter.get("/playlist-audios/:playlistId", getAudiosByPlaylist);
profileRouter.get("/private-playlist-audios/:playlistId", verifyAuth, getPrivateAudiosByPlaylist);
profileRouter.get("/is-following/:profileId", verifyAuth, getIsFollowing);
