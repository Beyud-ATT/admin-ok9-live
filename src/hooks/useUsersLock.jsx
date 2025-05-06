import { useMutation, useQueryClient } from "@tanstack/react-query";
import { lockUser } from "../services/usersAPI";

export default function useUsersLock() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: lockUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
