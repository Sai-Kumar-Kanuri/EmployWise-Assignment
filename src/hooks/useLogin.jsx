import { useState } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import { useNavigate } from 'react-router';
import { useAuth } from '@/context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const { setAuthUser } = useAuth();

  const login = async ({ email, password }) => {
    const success = handleInputErrors(email, password);

    if (!success) return;

    setLoading(true);
    setError('');
    try {
      const response = await axios.post("https://reqres.in/api/login", { email, password });

      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Update authUser in AuthContext
      setAuthUser(token);

      navigate("/users"); // Redirect to the users page
    } catch (err) {
      setError(err.response?.data?.error || "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputErrors = (email, password) => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return false;
    }
    return true;
  };

  return {
    loading,
    error,
    login,
  };
};

export default useLogin;
