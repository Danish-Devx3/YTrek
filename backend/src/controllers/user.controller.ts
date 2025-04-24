import { NextFunction, Request, Response } from "express";
import UserModel, { IUser } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.util.js";
import { loginSchema, signUpSchema } from "../schemas/user.zod.js";
import ApiResponse from "../utils/ApiResponse.util.js";
import ApiError from "../utils/ApiError.util.js";
import bcrypt from "bcryptjs";

export const registerUser = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		// take data
		// validate it
		// insert it in db
		// send response

		const { username, password, email, fullName } = req.body;

		const verify = signUpSchema.safeParse({
			username,
			password,
			email,
			fullName,
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
			fullName,
		});
		return res
			.status(201)
			.json(
				new ApiResponse(201, true, "User created successfully", user.userObj())
			);
	}
);

export const login = asyncHandler(
	// login user
	// take data from the body
	// validate it
	//

	async (req: Request, res: Response, next: NextFunction) => {
		const { username, email, password } = req.body;

		const validate = loginSchema.safeParse({ username, email, password });
		if (!validate.success) {
			return res
				.status(400)
				.json(
					new ApiError("Login validation failed", 400, validate.error.format())
				);
		}
		// let user;
		// if (!username) {
		// 	user = await UserModel.findOne({ email });
		// } else {
		// 	user = await UserModel.findOne({ username });
		// }

		const identifier = username ? { username } : { email };
		const user = await UserModel.findOne(identifier);

		if (!user) {
			return next(new ApiError("User not found, please signup", 404));
		}

		const comparePassword = await bcrypt.compare(password, user.password);
		if (!comparePassword) {
			return next(new ApiError("Incorrect Password", 401));
		}
		const accessToken = user.generateAccessToken();

		// update the refresh token
		const refreshToken = user.generateRefreshToken();
		user.refreshToken = refreshToken;

		await user.save();

		// remove password field from user TODO:
		return res
			.status(200)
			.cookie("accessToken", accessToken, { httpOnly: true, secure: true })
			.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true })
			.json(
				new ApiResponse(200, true, "User login successfully", user.userObj())
			);
	}
);
