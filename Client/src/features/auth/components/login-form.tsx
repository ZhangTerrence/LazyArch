import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { userLogin, UserLoginFormDefaults } from "../api/user-login.ts";

export const LoginForm = () => {
	const form = useForm({
		initialValues: UserLoginFormDefaults,
	});
	const navigate = useNavigate();
	const search = useSearch({ from: "/_public/login" });
	const userLoginMutation = useMutation({
		onSuccess: async () => {
			await navigate({
				to: search.redirect ?? "/documents",
			});
		},
		mutationFn: userLogin,
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				const data = form.getValues();
				userLoginMutation.mutate({
					email: data.email,
					password: data.password,
				});
			}}
		>
			<TextInput
				key={form.key("email")}
				label="Email"
				placeholder="Enter your email address"
				type="email"
				{...form.getInputProps("email")}
			/>
			<TextInput
				key={form.key("password")}
				label="Password"
				placeholder="Enter your password"
				type="password"
				{...form.getInputProps("password")}
			/>
			<TextInput
				key={form.key("confirmPassword")}
				label="Confirm Password"
				placeholder="Confirm your password"
				type="password"
				{...form.getInputProps("confirmPassword")}
			/>
			<Button type="submit">Submit</Button>
		</form>
	);
};
