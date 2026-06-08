import { Button } from "@mantine/core";
import {
	createFileRoute,
	isRedirect,
	redirect,
	useNavigate,
} from "@tanstack/react-router";
import { api } from "../lib/api.ts";

export const Route = createFileRoute("/documents")({
	component: Documents,
	beforeLoad: async ({ location }) => {
		try {
			const response = await api.get("Api/Auth/CheckAuth");
			if (response.status === 401) {
				// noinspection ExceptionCaughtLocallyJS
				throw redirect({
					to: "/login",
					search: {
						redirect: location.href,
					},
				});
			}
			return response;
		} catch (error) {
			// Re-throw redirects (they're intentional, not errors)
			if (isRedirect(error)) throw error;

			// Auth check failed (network error, etc.) - redirect to log in page
			throw redirect({
				to: "/login",
				search: { redirect: location.href },
			});
		}
	},
});

function Documents() {
	const navigate = useNavigate();

	const logout = async () => {
		const response = await api.delete("Api/Auth/Logout", {});
		if (response.status === 204) {
			await navigate({
				to: "/",
			});
		}
	};

	return (
		<div>
			<h3>Dashboard</h3>
			<Button onClick={logout}>Logout</Button>
		</div>
	);
}
