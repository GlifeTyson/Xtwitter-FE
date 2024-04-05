import { useState } from "react";
import Joi from "joi";
import { register } from "@/services/user";
import Link from "next/link";
const RegisterForm = () => {
  // State for form fields
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      displayName,
      email,
      password,
      confirmPassword,
    };
    console.log(user);
    // Perform validation and registration logic here
    const schema = Joi.object({
      displayName: Joi.string().min(3).max(30).required(),
      email: Joi.string()
        .email({ tlds: { allow: ["com", "vn", "sg"] } })
        .required(),
      password: Joi.string().min(5).required(),
      confirmPassword: Joi.string()
        .valid(Joi.ref("password"))
        .required()
        .messages({
          "any.only": "Passwords do not match",
        }),
    });

    const { error } = schema.validate(user, { abortEarly: true });
    if (error) {
      return setError(error.message);
    }
    register(displayName, password, email, confirmPassword, setError);
    // Reset form fields
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white w-[40vw] h-[40vh] flex flex-col justify-center items-center gap-4 rounded-lg p-10 text-black shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
    >
      <div className="w-full flex flex-row justify-end gap-10">
        <label htmlFor="username">Display Name:</label>
        <input
          className="w-[350px] h-7 rounded-md border-2 border-black"
          type="text"
          id="username"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-row justify-end gap-10">
        <label htmlFor="email">Email:</label>
        <input
          className="w-[350px] h-7 rounded-md border-2 border-black"
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
          className="w-[350px] h-7 rounded-md border-2 border-black"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="w-full flex flex-row justify-end gap-10">
        <label htmlFor="confirmPassword">Confirm:</label>
        <input
          className="w-[350px] h-7 rounded-md border-2 border-black"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      {error ? <div>{error}</div> : <></>}
      <button
        className="mt-auto p-2 text-white rounded-md bg-black hover:opacity-40"
        type="submit"
      >
        Register
      </button>
      <Link href={"login"}>Have an account ? Login Now</Link>
    </form>
  );
};

export default RegisterForm;
