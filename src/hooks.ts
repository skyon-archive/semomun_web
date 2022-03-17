import { parse, stringify } from "qs";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { api } from "./plugins/axios";
import { tokenState } from "./plugins/ridge";

export const useAuth = () => {
  const [token, setToken] = tokenState.use();
  const authenticated = token !== null;
  const signup = (data: any) =>
    api
      .post("/auth/signup", data)
      .then(({ data: { token } }) => setToken(token));
  const login = (data: any) =>
    api
      .post("/auth/login", data)
      .then(({ data: { token } }) => setToken(token));
  const logout = () => tokenState.reset();
  return { token, authenticated, signup, login, logout };
};

export function useQueryString(queryObject: any = {}) {
  const { search } = useLocation();
  const parsed = parse(search, { ignoreQueryPrefix: true });
  const searchObject = {
    page: "1",
    limit: "10",
    sort: { id: "DESC" },
    ...parsed,
    ...queryObject,
  };
  return stringify(searchObject, { addQueryPrefix: true, encode: false });
}

export const useThinHeader = () => {
  const { pathname } = useLocation();
  const thinPathnames = ["/landing", "/contact", "/faq", "/login"];
  return thinPathnames.some((thinPath) => pathname.startsWith(thinPath));
};

export const useInterval = (callback: () => void, ms: number) => {
  const callbackRef = useRef<() => void>();
  const timerRef = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (callbackRef.current)
      timerRef.current = setInterval(callbackRef.current, ms);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [callbackRef, ms]);

  const reset = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(callback, ms);
  };
  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };
  return [reset, clear];
};

export const useThrottle = (callback: any, ms: number) => {
  const stopped = useRef<boolean>(false);
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const throttled = (...props: any[]) => {
    if (!stopped.current) {
      stopped.current = true;
      timeout.current = setTimeout(() => {
        stopped.current = false;
      }, ms);
      callback(...props);
    }
  };
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    []
  );
  return throttled;
};
