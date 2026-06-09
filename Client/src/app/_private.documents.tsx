import { Grid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/documents")({
	component: Documents,
});

function Documents() {
	return (
		<Grid>
			<h3>Dashboard</h3>
		</Grid>
	);
}
