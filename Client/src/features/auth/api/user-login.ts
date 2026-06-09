import { api } from "../../../lib/api.ts";

export interface UserLoginDto {
	email: string;
	password: string;
}

export const UserLoginFormDefaults: UserLoginDto & {
	confirmPassword: string;
} = {
	email: "",
	password: "",
	confirmPassword: "",
};

export const userLogin = (data: UserLoginDto) => {
	return api.post("/Api/Auth/Login/Credentials", data);
};
