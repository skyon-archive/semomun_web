import React, { ComponentType, FC } from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";
import { fetcher } from "../plugins/react-query";
import { Role, User } from "../types";

export interface AdminRouteProps {
  component: ComponentType;
}

export const AdminRoute: FC<AdminRouteProps> = ({ component: Component }) => {
  const { authenticated } = useAuth();
  const { data: me, status } = useQuery<User>("/users/self", fetcher, {
    enabled: authenticated,
  });

  if (!authenticated) return <Navigate to="/login" replace />;
  else if (status === "loading") return <></>;
  else if (status === "success" && me && me.role === Role.ADMIN)
    return <Component />;
  else return <Navigate to="/login" replace />;
};
