import { useMemo } from "react";
import { useQueries, UseQueryResult } from "react-query";
import { api } from "./axios";

export function fetcher({ queryKey }: any) {
  return api.get(queryKey[0]).then(({ data }) => data);
}

export const useQueriesConsistent = <T>(queryKeys: string[]) => {
  const results = useQueries(
    queryKeys.map((queryKey) => ({ queryKey, queryFn: fetcher }))
  ) as UseQueryResult<T, unknown>[];
  return useMemo(
    () => results,
    [JSON.stringify(results.map((result) => result.status))]
  );
};
