import { getGeneralLink } from "../services/generalLinkAPI";
import { useQuery } from "@tanstack/react-query";

export default function useGeneralLinksGet() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["general-links"],
    queryFn: getGeneralLink,
  });

  if (isError) {
    console.error(error.response.data.message);
  }

  return { generalLinks: data, isLoading };
}
