import { Button } from "@mantine/core";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { api } from "../lib/api.ts";

export const Route = createFileRoute("/_auth/documents")({
	component: Documents,
});

function Documents() {
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
		<div>
			<h3>Dashboard</h3>
			<Button onClick={logout}>Logout</Button>
		</div>
	);
}
