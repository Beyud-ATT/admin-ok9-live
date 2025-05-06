import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBlockWord } from "../services/chatsAPI";

export default function useBlockWordDelete() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteBlockWord,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["block-words"],
      });
    },
    onError: (error) => {
      console.error(error.response.data.message);
    },
  });
}
