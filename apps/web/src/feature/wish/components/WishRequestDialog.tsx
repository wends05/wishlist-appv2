import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import RequestGrantForm from "../forms/RequestGrantForm";

export default function WishRequestGrantDialog({ wishId, render }: { wishId: string; render: React.ReactElement }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogTrigger render={render} />
      <DialogContent>
        <DialogHeader>Request to Grant Wish</DialogHeader>
        <RequestGrantForm handleClose={() => setIsOpen(false)} wishId={wishId} />
      </DialogContent>
    </Dialog>
  );
}
