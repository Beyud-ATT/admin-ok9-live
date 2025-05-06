import { useMutation } from "@tanstack/react-query";
import { updateNews } from "../services/newsAPI";
import { useQueryClient } from "@tanstack/react-query";

export default function useNewsUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateNews,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["news"],
      });
    },
  });
}
