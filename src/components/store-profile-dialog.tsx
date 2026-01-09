import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant, type GetManagedRestaurantResponse } from "@/api/get-managed-restaurant";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { updateProfile } from "@/api/update-profile";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string().nullable(),
})

type StoreProfile = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  const queryClient = useQueryClient()

  // react query wont make this query again since it has already been made in account-menu (cache)
  const { data: managedRestaurant } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant,
    staleTime: Infinity,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  function updateManagedRestaurantCache({ name,description }: StoreProfile) {
    const cached = queryClient.getQueryData<GetManagedRestaurantResponse>(['managed-restaurant'])
      
    if (cached) {
      queryClient.setQueryData<GetManagedRestaurantResponse>(['managed-restaurant'], {
        ...cached,
        name,
        description,
      })
    }

    return { cached }
  }

  const { mutateAsync: updateProfileFn } = useMutation({
    mutationFn: updateProfile,
    onMutate({ name, description }) {
      const { cached } = updateManagedRestaurantCache({ name, description })

      return { previousProfile: cached }
    },
    // optimistc interface
    onError(_error, _variables, context) {
      if (context?.previousProfile) {
        updateManagedRestaurantCache(context.previousProfile)
      }
    }
  })

  async function handleUpdateProfile(data: StoreProfile) {
    try {
      await updateProfileFn({
        name: data.name,
        description: data.description,
      })

      toast.success('Perfil atualizado com sucesso.')
    } catch {
      toast.error('Falha ao atualizar o perfil.')
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis aos seus clientes.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input 
              id="name" 
              className="col-span-3" 
              {...register('name')} 
            />

            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Textarea 
              id="description" 
              className="col-span-3" 
              {...register('description')} 
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant={"ghost"} type="button">Cancelar</Button>
          </DialogClose>
          <Button 
            variant={"success"} 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <Spinner /> : <>Salvar</>}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}