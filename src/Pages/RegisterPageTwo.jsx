import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterTwo = () => {
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        placeholder="Enter Address"
      />
      <input
        type="text"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        placeholder="Enter Phone"
      />
      <button
        onClick={() => {
          navigate("/register/one");
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          alert("Registration Success");
        }}
      >
        Next
      </button>
    </div>
  );
};

