import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu, UserCircle } from "lucide-react";

function SidebarContent({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: "assignments" | "account") => void;
}) {
  return (
    <nav className="flex-1 py-6 mt-4">
      <ul className="space-y-2 px-4">
        <li>
          <Button
            variant={activeTab === "assignments" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("assignments")}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Assignments
          </Button>
        </li>
        <li>
          <Button
            variant={activeTab === "account" ? "secondary" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveTab("account")}
          >
            <UserCircle className="mr-2 h-4 w-4" />
            Account
          </Button>
        </li>
      </ul>
    </nav>
  );
}

function StudentSidebar({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: "assignments" | "account") => void;
}) {
  return (
    <>
      <aside className="hidden md:flex flex-col w-64 bg-card border-r border-border">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </aside>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed top-4 left-4 z-50"
          >
            <Menu className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <div className="flex flex-col h-full">
            <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default StudentSidebar;
