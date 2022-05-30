import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterOne = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      />
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Enter Email"
      />
      <button
        onClick={() => {
          navigate("/register/two");
        }}
      >
        Next
      </button>
    </div>
  );
};
