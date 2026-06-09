import { AppShell, Button } from "@mantine/core";
import {
	createFileRoute,
	isRedirect,
	Link,
	Outlet,
	redirect,
	useNavigate,
} from "@tanstack/react-router";
import { api } from "../lib/api.ts";

export const Route = createFileRoute("/_private")({
	component: PrivatePageLayout,
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

function PrivatePageLayout() {
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
		<>
			<AppShell.Header className="flex justify-between items-center px-4">
				<Link to="/">LazyArch</Link>
				<Button onClick={logout}>Logout</Button>
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</>
	);
}
