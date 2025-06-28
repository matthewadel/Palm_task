import { QueryKey, useQuery, UseQueryOptions } from '@tanstack/react-query';

/**
 * Generic hook to fetch data from an API endpoint using react-query's useQuery.
 * @param key Unique query key for caching and refetching
 * @param fetcher Function that returns a promise (your API call)
 * @param options Optional react-query options
 */
export function useApiQuery<TData = unknown, TError = unknown>(
  key: QueryKey,
  fetcher: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError, TData, QueryKey>,
) {
  return useQuery<TData, TError, TData, QueryKey>({
    queryKey: key,
    queryFn: fetcher,
    ...options,
  });
}
