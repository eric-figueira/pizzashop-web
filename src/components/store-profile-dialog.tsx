import { useQuery } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

const storeProfileSchema = z.object({
  name: z.string().min(1),
  description: z.string(),
})

type StoreProfile = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
  // react query wont make this query again since it has already been made in account-menu (cache)
  const { data: managedRestaurant, isLoading: isManagedRestaurantLoading } = useQuery({
    queryKey: ['managed-restaurant'],
    queryFn: getManagedRestaurant
  })

  const {
    register,
    handleSubmit
  } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileSchema),
    values: {
      name: managedRestaurant?.name ?? '',
      description: managedRestaurant?.description ?? '',
    },
  })

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Perfil da loja</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu estabelecimento visíveis aos seus clientes.
        </DialogDescription>
      </DialogHeader>

      <form action="">
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
          <Button variant={"ghost"} type="button">Cancelar</Button>
          <Button variant={"success"} type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}