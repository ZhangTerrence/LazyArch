import type {
	QueryClientConfig,
	UseMutationOptions,
} from "@tanstack/react-query";

export const queryClientConfig: QueryClientConfig = {
	defaultOptions: {
		queries: {
			retry: false,
			staleTime: 1000 * 60 * 60, // 1 hour
		},
	},
};

export type ApiFnReturnType<FnType extends (...args: any) => Promise<any>> =
	Awaited<ReturnType<FnType>>;

export type QueryOptions<T extends (...args: any[]) => any> = Omit<
	ReturnType<T>,
	"queryKey" | "queryFn"
>;

export type MutationOptions<
	MutationFnType extends (...args: any) => Promise<any>,
> = UseMutationOptions<
	ApiFnReturnType<MutationFnType>,
	Error,
	Parameters<MutationFnType>[0]
>;
