import { useRef } from "react";
import { useQueries, UseQueryResult } from "react-query";
import { api } from "./axios";

export function fetcher({ queryKey }: any) {
  return api.get(queryKey[0]).then(({ data }) => data);
}

export const useQueriesConsistent = <T>(queryKeys: string[]) => {
  const results = useQueries(
    queryKeys.map((queryKey) => ({ queryKey, queryFn: fetcher }))
  ) as UseQueryResult<T, unknown>[];
  const ref = useRef(results);
  if (
    results.length !== ref.current.length ||
    results.some((result, idx) => result.status !== ref.current[idx].status)
  )
    ref.current = results;
  return ref.current;
};
