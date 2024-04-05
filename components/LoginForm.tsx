import { login } from "@/services/user";
import Joi from "joi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginForm = () => {
  // State for form fields
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Perform validation and authentication logic here
    const schema = Joi.object({
      email: Joi.string()
        .email({ tlds: { allow: ["com", "vn", "sg"] } })
        .required(),
      password: Joi.string().min(5).required(),
    });
    const user = {
      email,
      password,
    };
    const { error } = schema.validate(user, { abortEarly: true });
    if (error) {
      return setError(error.message);
    }
    login(email, password, setError);
    // Reset form fields
    setEmail("");
    setPassword("");
    setError("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-[35vw] h-[30vh] flex flex-col justify-center items-center gap-4 rounded-lg p-10 text-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <div className="w-full flex flex-row justify-end gap-10">
        <label htmlFor="email">Email:</label>
        <input
          className="w-[300px] h-7 rounded-md border-2 border-black"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-row justify-end gap-10">
        <label htmlFor="password">Password:</label>
        <input
          className="w-[300px] h-7 rounded-md border-2 border-black"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {error ? <div>{error}</div> : <></>}
      <button
        className="mt-auto p-2 text-white rounded-md bg-black hover:opacity-40"
        type="submit"
      >
        Login
      </button>
      <Link href={"register"}>Not have account ? Register</Link>
    </form>
  );
};

export default LoginForm;
