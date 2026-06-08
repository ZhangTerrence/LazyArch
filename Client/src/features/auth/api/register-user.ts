import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/api.ts";
import type { MutationOptions } from "../../../lib/react-query.ts";

export type RegisterUserDto = {
	username: string;
	email: string;
	password: string;
};

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

type UseRegisterUserOptions = {
	options?: MutationOptions<typeof registerUser>;
};

export const useRegisterUserMutation = ({
	options,
}: UseRegisterUserOptions) => {
	const { onSuccess, ...restConfig } = options || {};

	return useMutation({
		...restConfig,
		mutationFn: registerUser,
	});
};
