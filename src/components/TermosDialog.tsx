import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../../@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

export default function TermosDialog() {
  return (
    <Dialog>
      <DialogTrigger className="text-sm underline mb-2 text-left">
        Leia os termos
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Termos</DialogTitle>
          <DialogDescription>Testeee</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
