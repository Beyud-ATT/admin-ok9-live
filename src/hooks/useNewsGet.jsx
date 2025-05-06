import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/newsAPI";
import { useSearchParams } from "react-router";

export default function useNewsGet() {
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 20;
  const textSearch = searchParams.get("textSearch") || "";

  return useQuery({
    queryKey: ["news", page, pageSize, textSearch],
    queryFn: () => getNews({ pageIndex: page, pageSize, textSearch }),
  });
}
