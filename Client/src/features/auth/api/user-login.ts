import { useMutation } from "@tanstack/react-query";
import { api } from "../../../lib/api.ts";
import type { MutationOptions } from "../../../lib/react-query.ts";

export type UserLoginDto = {
	email: string;
	password: string;
};

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

type UseUserLoginOptions = {
	options?: MutationOptions<typeof userLogin>;
};

export const useUserLoginMutation = ({ options }: UseUserLoginOptions) => {
	const { onSuccess, ...restConfig } = options || {};

	return useMutation({
		onSuccess: (...args) => {
			onSuccess?.(...args);
		},
		...restConfig,
		mutationFn: userLogin,
	});
};
