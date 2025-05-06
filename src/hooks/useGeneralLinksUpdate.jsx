import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGeneralLink } from "../services/generalLinkAPI";
import { toast } from "react-toastify";

export default function useGeneralLinksUpdate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateGeneralLink,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["general-links"],
      });
      toast.success("Lưu thông tin link thành công !");
    },
  });
}
