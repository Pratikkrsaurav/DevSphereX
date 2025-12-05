import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("Login:", email, password);
  };

  return (
    <div className="max-w-md mx-auto mt-20 bg-white/5 p-6 rounded-xl border border-white/10">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      <form onSubmit={submit}>
        <label>Email</label>
        <input
          type="email"
          className="w-full p-2 rounded bg-black/20 border border-white/10 mb-3"
          value={email} onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="w-full p-2 rounded bg-black/20 border border-white/10 mb-3"
          value={password} onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-primary py-2 mt-3 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
