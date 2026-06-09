import { Grid } from "@mantine/core";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_private/documents")({
	component: Documents,
	// loader: ({ context: { queryClient } }) =>
	// 	queryClient.ensureQueryData(getDocumentsOptions),
});

function Documents() {
	// const documentsQuery = useQuery(getDocumentsOptions);
	// const documents = documentsQuery.data;

	return (
		<Grid>
			<h3>Dashboard</h3>
		</Grid>
	);
}
