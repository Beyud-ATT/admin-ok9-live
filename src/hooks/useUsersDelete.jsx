import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../services/usersAPI";

export default function useUsersDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
