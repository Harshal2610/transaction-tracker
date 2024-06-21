import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

async function createTransApi(transData) {
  const res = await axios.post("/api/v1/transactions", transData);
}

export function useCreateTrans() {
  const queryClient = useQueryClient();

  const { mutate: createTrans, isPending: isCreating } = useMutation({
    mutationFn: createTransApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["transactions"],
      });
      toast.success("Transaction Created");
    },
    onError: (err) => {
      toast.error("Cannot create Transaction");
      console.log(err);
    },
  });

  return { createTrans, isCreating };
}
