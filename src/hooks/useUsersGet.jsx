import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/usersAPI";
import { useLocation, useSearchParams } from "react-router";
import { useEffect, useState } from "react";

export default function useUsersGet() {
  const pathname = useLocation().pathname;
  const [userType, setUserType] = useState(null);
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;
  const textSearch = searchParams.get("textSearch") || "";

  useEffect(() => {
    if (pathname.includes("/users")) {
      setUserType(1);
    }

    if (pathname.includes("/idols")) {
      setUserType(2);
    }
  }, [pathname]);

  return useQuery({
    queryKey: ["users", userType, page, pageSize, textSearch],
    queryFn: () =>
      getUsers({ userType, pageIndex: page, pageSize, textSearch }),
    enabled: userType !== null,
  });
}
