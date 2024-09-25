import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProblemCardProps {
  title: string;
  difficulty: string;
  description: string;
}

function ProblemCard({ title, difficulty, description }: ProblemCardProps) {
  const navigate = useNavigate();
  const completed = false;
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-md flex justify-between items-center">
          {title}
          {completed ? (
            <CheckCircle2 className="h-5 w-5 text-green-500" />
          ) : (
            <Button onClick={() => navigate("/workspace")} size="sm">
              Attempt
            </Button>
          )}
        </CardTitle>
        <CardDescription>Difficulty: {difficulty}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-2">{description}</p>
      </CardContent>
    </Card>
  );
}

export default ProblemCard;
