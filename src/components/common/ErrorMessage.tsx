interface ErrorMessageProps {
  stderr: string;
}

function ErrorMessage({ stderr }: ErrorMessageProps) {
  const lines = stderr.split("\n");
  return lines.map((line, index) => (
    <span key={index} className="block">
      {line}
    </span>
  ));
}

export default ErrorMessage;
