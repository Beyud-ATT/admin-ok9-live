import { useMutation } from "@tanstack/react-query";
import { addBlockWord } from "../services/chatsAPI";
import { useQueryClient } from "@tanstack/react-query";

export default function useBlockWordAdd() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBlockWord,
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
