import { School, User } from "lucide-react";
import { Button } from "../ui/button";
import { Spinner } from "../common/Icons";

interface SubmitButtonProps {
  isPending: boolean;
  role: "student" | "teacher";
  action: string;
}

function SubmitButton({ isPending, role, action }: SubmitButtonProps) {
  return (
    <Button type="submit">
      {isPending ? (
        <Spinner />
      ) : (
        <>
          {role === "teacher" ? (
            <School className="mr-2 h-4 w-4" />
          ) : (
            <User className="mr-2 h-4 w-4" />
          )}
          {action} as {role}
        </>
      )}
    </Button>
  );
}

export default SubmitButton;
