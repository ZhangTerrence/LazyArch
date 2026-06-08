// biome-ignore lint/correctness/noUnusedVariables: global interface
interface ViteTypeOptions {
	// By adding this line, you can make the type of ImportMetaEnv strict
	// to disallow unknown keys.
	strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
	readonly VITE_API_URL: string;
}

// biome-ignore lint/correctness/noUnusedVariables: global interface
interface ImportMeta {
	readonly env: ImportMetaEnv;
}
