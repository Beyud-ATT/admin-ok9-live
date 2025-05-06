import { useMutation, useQueryClient } from "@tanstack/react-query";
import { banChatUser } from "../services/usersAPI";

export default function useUsersBanChat() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: banChatUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });
}
