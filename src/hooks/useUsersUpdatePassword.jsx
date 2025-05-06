import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePassword } from "../services/usersAPI";

export default function useUsersUpdatePassword() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updatePassword,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
