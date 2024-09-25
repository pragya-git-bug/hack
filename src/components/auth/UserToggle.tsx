import { School, User } from "lucide-react";
import { Button } from "../ui/button";

interface UserToggleProps {
  role: "student" | "teacher";
  setRole: (role) => void;
}

function UserToggle({ role, setRole }: UserToggleProps) {
  return (
    <div className="flex rounded-md overflow-hidden border mb-4">
      <Button
        type="button"
        variant={role === "student" ? "default" : "ghost"}
        className={`flex-1 rounded-none ${
          role === "student"
            ? "bg-primary text-primary-foreground"
            : "bg-background"
        }`}
        onClick={() => setRole("student")}
      >
        <User className="mr-2 h-4 w-4" />
        Student
      </Button>
      <Button
        type="button"
        variant={role === "teacher" ? "default" : "ghost"}
        className={`flex-1 rounded-none ${
          role === "teacher"
            ? "bg-primary text-primary-foreground"
            : "bg-background"
        }`}
        onClick={() => setRole("teacher")}
      >
        <School className="mr-2 h-4 w-4" />
        Teacher
      </Button>
    </div>
  );
}

export default UserToggle;
