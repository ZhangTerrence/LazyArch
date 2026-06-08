import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../features/auth/components/login-form.tsx";

export const Route = createFileRoute("/login")({
	component: Login,
	validateSearch: () => {
		const searchParams: {
			redirect?: string;
		} = {};
		return searchParams;
	},
});

function Login() {
	return <LoginForm />;
}
