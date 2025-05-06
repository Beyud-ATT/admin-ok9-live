import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addListBlockWord } from "../services/chatsAPI";

export default function useBlockWordAddList() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addListBlockWord,
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
