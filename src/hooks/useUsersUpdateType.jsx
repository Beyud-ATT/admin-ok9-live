import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUserType } from "../services/usersAPI";

export default function useUsersUpdateType() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUserType,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
