import { AppShell } from "@mantine/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({}),
});

function RootComponent() {
	return (
		<AppShell withBorder={true} header={{ height: 40 }} padding={{ base: 10 }}>
			<Outlet />
			{import.meta.env.DEV && (
				<>
					<TanStackRouterDevtools position="bottom-left" />
					<ReactQueryDevtools position="right" />
				</>
			)}
		</AppShell>
	);
}
