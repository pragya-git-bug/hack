import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "lucide-react";
import ProblemCard from "./ProblemCard";
import { Assignment } from "@/lib/types";

interface StudentAssignmentsProps {
  assignments: Assignment[];
}

interface ProblemDialogProps {
  assignment: Assignment;
}

function ProblemDialog({ assignment }: ProblemDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Show Problems
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{assignment.title} - Problems</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {assignment.problems.map((problem, index) => (
            <ProblemCard
              key={index}
              title={problem.title}
              difficulty={problem.difficulty}
              description={problem.description}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function StudentAssignments({ assignments }: StudentAssignmentsProps) {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id}>
            <CardHeader>
              <CardTitle className="text-lg leading-tight">
                {assignment.title}
              </CardTitle>
              <CardDescription className="mt-1">
                Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-2 line-clamp-3">{assignment.description}</p>
              <p className="text-sm text-muted-foreground mb-4">
                Teacher: {assignment.teacherName}
              </p>
              <ProblemDialog assignment={assignment} />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default StudentAssignments;
