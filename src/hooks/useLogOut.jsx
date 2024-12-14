import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import toast from "react-hot-toast";

const useLogOut = () => {
    const [loading, setLoading] = useState("");
    const { setAuthUser } = useAuth();

    const logout = async () => {

        setLoading(true);

        try {
            localStorage.removeItem("token");
            setAuthUser(null);
            navigate("/login");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}

export default useLogOut