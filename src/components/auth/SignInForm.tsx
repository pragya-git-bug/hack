import { useState } from "react";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import ErrorAlert from "../common/ErrorAlert";
import { jwtDecode } from "jwt-decode";
import UserToggle from "./UserToggle";
import SubmitButton from "./SubmitButton";

function SignInForm() {
  const navigate = useNavigate();
  const signin = useSignIn();
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState([]);

  const handleSignIn = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_ASSIGN_API}/auth/${role}/signin`,
        data
      );
      if (res.status == 200) {
        const { accessToken, refreshToken } = res.data;
        const decodedData = jwtDecode(accessToken);
        if (
          signin({
            auth: {
              token: accessToken,
              type: "Bearer",
            },
            refresh: refreshToken,
            userState: decodedData,
          })
        ) {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      const errorMessages = error.response?.data?.errors || [
        { msg: error.message },
      ];
      setErrors(errorMessages);
    }
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: handleSignIn,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className={cn("grid gap-6")}>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <UserToggle role={role} setRole={setRole} />
          {errors &&
            errors.map((err, index) => (
              <ErrorAlert key={index} errorTitle={err.msg} />
            ))}

          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              autoCapitalize="none"
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <SubmitButton isPending={isPending} role={role} action="Sign in" />
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
