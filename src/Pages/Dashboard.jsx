import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/register/one");
        }}
      >
        Go to Registration
      </button>
    </div>
  );
};
