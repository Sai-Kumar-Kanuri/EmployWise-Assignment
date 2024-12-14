import Login from './pages/Login/Login';
import Users from './pages/Users/Users';
import { useAuth } from './context/AuthContext';
import { Navigate, Route, Routes } from 'react-router';
import { Toaster } from "react-hot-toast";


function App() {

  const { authUser } = useAuth();

  console.log(authUser);

  return (
    <>
      <Routes>
        <Route path="/login" element={authUser ? <Users /> : <Login />} />
        <Route path="/" element={authUser ? <Users /> : <Login />} />
        {/* <Route path="/users" element={<Users />} /> */}
        <Route
          path="/users"
          element={authUser ? <Users /> : <Navigate to="/login" />}
        />

      </Routes>
      <Toaster />
    </>
  )
}

export default App
