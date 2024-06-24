import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

async function deleteTransactionApi(id) {
  await axios.delete(`/api/v1/transactions/${id}`);
}

export function useDeleteTransaction() {
  const queryClient = useQueryClient();

  const { mutate: deleteTransaction, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTransactionApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success("Transaction Deleted");
    },
    onError: (err) => {
      toast.error("Cannot delete Transaction");
      console.log(err);
    },
  });

  return { deleteTransaction, isDeleting };
}
