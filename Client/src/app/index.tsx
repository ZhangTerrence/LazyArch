import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div className="w-screen h-screen bg-red-600">
			<h3 className="">Welcome Home!</h3>
		</div>
	);
}
