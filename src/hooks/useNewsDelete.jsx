import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNews } from "../services/newsAPI";

export default function useNewsDelete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
  });
}
