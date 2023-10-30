import { Router } from "express";
import {
  createUserValidation,
  emailTokenVerification,
} from "../utils/validation";
import { validatorAuth } from "../middleware/validator";
import {
  createUser,
  generatePassword,
  grantAccessValid,
  reVerifyEmail,
  verifyEmail,
} from "../controller";
import { verifyPassword } from "../middleware/auth";

export const authRouter = Router();

authRouter.post("/create", validatorAuth(createUserValidation), createUser);
authRouter.post(
  "/verify-email",
  validatorAuth(emailTokenVerification),
  verifyEmail
);
authRouter.post("/re-verify-email", reVerifyEmail);
authRouter.post("/forget-password", generatePassword);
authRouter.post(
  "/verify-password-token",
  validatorAuth(emailTokenVerification),
  verifyPassword,
  grantAccessValid
);
