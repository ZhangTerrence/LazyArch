import { AppShell, Group } from "@mantine/core";
import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_public")({
	component: PublicPageLayout,
});

function PublicPageLayout() {
	return (
		<>
			<AppShell.Header className="flex justify-between items-center px-4">
				<Link to="/">LazyArch</Link>
				<Group gap="md">
					<Link to="/login">Login</Link>
					<Link to="/register">Register</Link>
				</Group>
			</AppShell.Header>
			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</>
	);
}
