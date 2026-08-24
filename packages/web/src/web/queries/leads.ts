import { useMutation, useQueryClient } from "@tanstack/react-query";
import { orpc } from "../lib/api";

export function useCreateLead() {
  const queryClient = useQueryClient();
  return useMutation(
    orpc.leads.create.mutationOptions({
      onSuccess: () => queryClient.invalidateQueries({ queryKey: orpc.leads.key() }),
    }),
  );
}
