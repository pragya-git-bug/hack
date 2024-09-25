import { useState, useEffect } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Problem } from "@/lib/types";
import ProblemDescription from "./ProblemDescription";
import CodeEditor from "./CodeEditor";
import CodeActions from "./CodeActions";
import EditorOptions from "./EditorOptions";
import { starterCodes } from "@/lib/starterCode";

interface CodeWorkspaceProps {
  problem: Problem;
}

function CodeWorkspace({ problem }: CodeWorkspaceProps) {
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(starterCodes[language]);

  useEffect(() => {
    setCode(starterCodes[language]);
  }, [language]);

  return (
    <div className="h-screen w-full" style={{ backgroundColor: "#1e1e1e" }}>
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel defaultSize={30} minSize={20} maxSize={50}>
          <ProblemDescription problem={problem} />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={70}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={5}>
              <EditorOptions value={language} setValue={setLanguage} />
            </ResizablePanel>
            <ResizablePanel defaultSize={85}>
              <CodeEditor language={language} code={code} setCode={setCode} />
            </ResizablePanel>
            <ResizablePanel defaultSize={10}>
              <CodeActions problem={problem} code={code} language={language} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default CodeWorkspace;
