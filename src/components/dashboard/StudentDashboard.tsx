import { useState } from "react";
import StudentAssignments from "./StudentAssignments";
import StudentAccount from "./StudentAccount";
import StudentSidebar from "./StudentSidebar";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import SignOut from "./SignOut";
import { assignments } from "@/lib/assignment";

interface HeaderProps {
  name: string;
}

interface User {
  id: string;
  name: string;
  role: "STUDENT" | "TEACHER";
}

function Header({ name }: HeaderProps) {
  return (
    <header className="bg-card border-b border-border p-4 flex items-center justify-between md:justify-end">
      <div className="w-8 md:hidden" />
      <h1 className="text-xl font-semibold">Hello, {name}</h1>
      <SignOut />
      <div className="w-8 md:hidden" />
    </header>
  );
}

function StudentDashboard() {
  // const user: User = useAuthUser();
  const [activeTab, setActiveTab] = useState<"assignments" | "account">(
    "assignments"
  );

  return (
    <div className="flex h-screen bg-background text-foreground">
      <StudentSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header name="Pragya" />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {activeTab === "assignments" && (
            <StudentAssignments assignments={assignments} />
          )}
          {activeTab === "account" && <StudentAccount />}
        </main>
      </div>
    </div>
  );
}

export default StudentDashboard;
