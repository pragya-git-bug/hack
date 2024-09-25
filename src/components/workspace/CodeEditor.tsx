import { Editor } from "@monaco-editor/react";

interface CodeEditorProps {
  language: string;
  code: string;
  setCode: (code: string) => void;
}

function CodeEditor({ language, code, setCode }: CodeEditorProps) {
  return (
    <Editor
      height="100%"
      language={language}
      value={code}
      onChange={(value) => {
        setCode(value || "");
      }}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
        fontSize: 20,
        lineNumbers: "on",
        automaticLayout: true,
        wordWrap: "on",
      }}
    />
  );
}

export default CodeEditor;
