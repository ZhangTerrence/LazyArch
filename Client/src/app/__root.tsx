import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({}),
});

function RootComponent() {
	return (
		<>
			<div className="">
				<Link
					to="/"
					activeProps={{
						className: "",
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>
				<Link to="/about" className="">
					About
				</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
