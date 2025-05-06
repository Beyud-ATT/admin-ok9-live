import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../services/livestreamsAPI";

export default function useLivestreamUpdateOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livestreams"],
      });
    },
  });
}
