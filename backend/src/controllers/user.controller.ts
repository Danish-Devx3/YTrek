import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { signUpSchema } from "../schemas/user.zod.js";
import ApiResponse from "../utils/ApiResponse.util.js";

export const registerUser = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		// take data
		// validate it
		// insert it in db
		// send response

		const { username, password, email, fullname } = req.body;

		const verify = signUpSchema.safeParse({
			username,
			password,
			email,
			fullname,
		});

		if (!verify.success) {
			return res
				.status(400)
				.json(
					new ApiResponse(
						400,
						false,
						"validation failed",
						verify.error.format()
					)
				);
		}
		const user = await UserModel.create({
			username,
			password,
			email,
			fullname,
		});
		return res
			.status(201)
			.json(new ApiResponse(201, true, "User created successfully", user));
	}
);

export const login = asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => { 
    }
    
);