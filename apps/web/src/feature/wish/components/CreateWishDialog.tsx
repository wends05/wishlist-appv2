import { useSuspenseQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import meQueryOptions from "@/feature/auth/queryOptions/me";
import CreateWishForm from "../forms/CreateWishForm";
import { getCategoriesQueryOptions } from "../queryOptions/getCategoriesQueryOptions";

interface CreateWishDialogProps {
  trigger: React.ReactElement;
}

export default function CreateWishDialog({ trigger }: CreateWishDialogProps) {
  const { data: me } = useSuspenseQuery(meQueryOptions);
  const { data: categories, isLoading } = useSuspenseQuery(getCategoriesQueryOptions);

  if (isLoading) {
    return <>...</>
  }
  if (!categories.length) {
    return <>Unable to fetch Categories</>
  }

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent>
        <CreateWishForm
          firstCategoryId={categories[0]!._id}
          ownerId={me._id}
        />
      </DialogContent>
    </Dialog>
  );
}
