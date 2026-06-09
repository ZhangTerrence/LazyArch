import { Center } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Center className="AppShellMainFullHeight">Welcome Home!</Center>;
}
