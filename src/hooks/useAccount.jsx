import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getMe } from "../services/accountAPI";
import { useAuth } from "../context/AuthProvider";

export default function useAccount() {
  const { logout, isAuthenticated } = useAuth();
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["account"],
    queryFn: getMe,
    enabled: isAuthenticated,
  });

  if (isError) {
    if (error.response.status === 401) {
      logout();
    }
    toast.error(error.response.data.message);
  }

  return { data, isLoading };
}
