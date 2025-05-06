import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOnTop } from "../services/livestreamsAPI";

export default function useLivestreamUpdateOnTop() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOnTop,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livestreams"],
      });
    },
  });
}
