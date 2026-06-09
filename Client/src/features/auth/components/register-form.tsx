import { Button, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate, useSearch } from "@tanstack/react-router";
import {
	RegisterUserFormDefaults,
	useRegisterUserMutation,
} from "../api/register-user.ts";

export const RegisterForm = () => {
	const form = useForm({
		initialValues: RegisterUserFormDefaults,
	});
	const navigate = useNavigate();
	const search = useSearch({ from: "/_public/register" });
	const registerUserMutation = useRegisterUserMutation({
		options: {
			onSuccess: async () => {
				await navigate({
					to: search.redirect ?? "/documents",
				});
			},
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				const data = form.getValues();
				registerUserMutation.mutate({
					username: data.username,
					email: data.email,
					password: data.password,
				});
			}}
		>
			<TextInput
				key={form.key("username")}
				label="Username"
				placeholder="Enter your desired username"
				{...form.getInputProps("username")}
			/>
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
