import { Router } from "express";
import {
  createUserValidation,
  emailTokenVerification,
  signInValidation,
  updatePasswordValidation,
} from "../utils/validation";
import { validator } from "../middleware/validator";
import {
  updateProfile,
  createUser,
  generatePassword,
  grantAccessValid,
  sendProfile,
  reVerifyEmail,
  signIn,
  updatePassword,
  verifyEmail,
  logOut,
} from "../controller";
import { fileParser, verifyAuth, verifyPassword } from "../middleware/auth";

export const authRouter = Router();

authRouter.post("/create", validator(createUserValidation), createUser);
authRouter.post(
  "/verify-email",
  validator(emailTokenVerification),
  verifyEmail
);
authRouter.post("/re-verify-email", reVerifyEmail);
authRouter.post("/forget-password", generatePassword);
authRouter.post(
  "/verify-password-token",
  validator(emailTokenVerification),
  verifyPassword,
  grantAccessValid
);
authRouter.post(
  "/update-password",
  validator(updatePasswordValidation),
  verifyPassword,
  updatePassword
);
authRouter.post("/sign-in", validator(signInValidation), signIn);
authRouter.get("/authorized", verifyAuth, sendProfile);
authRouter.post("/update-profile", verifyAuth, fileParser, updateProfile);
authRouter.post("/log-out", verifyAuth, logOut);
