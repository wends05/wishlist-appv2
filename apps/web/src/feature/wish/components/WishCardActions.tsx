import { ArrowRightIcon, DotsThreeIcon } from "@phosphor-icons/react";
import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface WishCardProps {
  _id: string;
}
export default function WishCardActions({ _id }: WishCardProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <DotsThreeIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem>
            <Link className="flex w-full items-center gap-2" params={{ id: _id }} to="/wish/$id">
              <ArrowRightIcon />
              Details
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
