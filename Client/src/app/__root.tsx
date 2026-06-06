import { AppShell, Group } from "@mantine/core";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({}),
});

function RootComponent() {
	return (
		<AppShell withBorder={true} header={{ height: 40 }} padding={{ base: 10 }}>
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
			<TanStackRouterDevtools position="bottom-right" />
		</AppShell>
	);
}
