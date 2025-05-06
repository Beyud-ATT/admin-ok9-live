import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateDefault } from "../services/livestreamsAPI";

export default function useLivestreamUpdateDefault() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDefault,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["livestreams"],
      });
    },
  });
}
