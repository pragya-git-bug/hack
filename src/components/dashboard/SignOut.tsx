import { Button } from "../ui/button";
import useSignOut from "react-auth-kit/hooks/useSignOut";
import { useNavigate } from "react-router-dom";

function SignOut() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleClick = () => {
    signOut();
    navigate("/");
  };

  return (
    <Button variant="outline" className="ml-4" onClick={handleClick}>
      Sign out
    </Button>
  );
}

export default SignOut;
