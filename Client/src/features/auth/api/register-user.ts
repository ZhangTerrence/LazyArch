import { api } from "../../../lib/api.ts";

export interface RegisterUserDto {
	username: string;
	email: string;
	password: string;
}

export const RegisterUserFormDefaults: RegisterUserDto & {
	confirmPassword: string;
} = {
	username: "",
	email: "",
	password: "",
	confirmPassword: "",
};

export const registerUser = (data: RegisterUserDto) => {
	return api.post("/Api/Auth/Register", data);
};
