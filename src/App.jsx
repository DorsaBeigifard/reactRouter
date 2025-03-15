import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Profile from "./components/Profile";
import Payment from "./components/Payment";
import Post from "./components/Post";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/app" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="dashboard" element={<Dashboard />}>
            {/* <Route index element={<Profile />} />  this while showing profile, keeps query as app/dashboard -> fix with Navigate */}
            <Route index element={<Navigate to="profile" />} />
            {/* app/dashboard/profile */}
            <Route path="profile" element={<Profile />} />
            <Route path="payment" element={<Payment />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
