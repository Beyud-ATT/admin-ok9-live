import { useMutation, useQueryClient } from "@tanstack/react-query";
import { unlockUser } from "../services/usersAPI";

export default function useUsersUnlock() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: unlockUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
