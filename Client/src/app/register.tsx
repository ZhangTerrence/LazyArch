import { createFileRoute } from "@tanstack/react-router";
import { RegisterForm } from "../features/auth/components/register-form.tsx";

export const Route = createFileRoute("/register")({
	component: RouteComponent,
	validateSearch: () => {
		const searchParams: {
			redirect?: string;
		} = {};
		return searchParams;
	},
});

function RouteComponent() {
	return <RegisterForm />;
}
