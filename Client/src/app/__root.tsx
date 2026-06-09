import { AppShell } from "@mantine/core";
import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

type RootRouteContext = {
	queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RootRouteContext>()({
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
