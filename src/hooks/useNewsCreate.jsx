import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createNews } from "../services/newsAPI";

export default function useNewsCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
  });
}
