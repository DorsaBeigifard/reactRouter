import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(false);

  const handleSubmit = () => {
    navigate("/app/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuth && <Navigate to="/app/dashboard" replace={true} />}
      <form onSubmit={handleSubmit}>
        <button>Login</button>
        <button onClick={() => setIsAuth(!isAuth)}>Toggle Auth</button>
      </form>
    </div>
  );
}

export default Login;
