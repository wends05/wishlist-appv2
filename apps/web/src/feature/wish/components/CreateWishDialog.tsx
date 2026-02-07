import { RedirectToSignIn } from "@clerk/clerk-react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { authQueryOptions } from "@/feature/auth/options";
import CreateWishForm from "../forms/CreateWishForm";
import { wishQueryOptions } from "../options";

interface CreateWishDialogProps {
  trigger: React.ReactElement;
}

export default function CreateWishDialog({ trigger }: CreateWishDialogProps) {
  const { data: me } = useSuspenseQuery(authQueryOptions.me);
  const { data: categories, isLoading } = useSuspenseQuery(wishQueryOptions.getCategories);

  if (isLoading) {
    return <>...</>;
  }

  if (!categories.length || !categories[0]) {
    return <>Unable to fetch Categories</>;
  }

  if (!me) {
    return <RedirectToSignIn />;
  }

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent>
        <CreateWishForm firstCategoryId={categories[0]._id} />
      </DialogContent>
    </Dialog>
  );
}
