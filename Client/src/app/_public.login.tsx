import { createFileRoute } from "@tanstack/react-router";
import { LoginForm } from "../features/auth/components/login-form.tsx";

export const Route = createFileRoute("/_public/login")({
	component: RouteComponent,
	validateSearch: () => {
		const searchParams: {
			redirect?: string;
		} = {};
		return searchParams;
	},
});

function RouteComponent() {
	return <LoginForm />;
}
