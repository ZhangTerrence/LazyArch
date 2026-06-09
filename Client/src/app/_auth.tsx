import {
	createFileRoute,
	isRedirect,
	Outlet,
	redirect,
} from "@tanstack/react-router";
import { api } from "../lib/api.ts";

export const Route = createFileRoute("/_auth")({
	component: AuthLayout,
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

function AuthLayout() {
	return <Outlet />;
}
