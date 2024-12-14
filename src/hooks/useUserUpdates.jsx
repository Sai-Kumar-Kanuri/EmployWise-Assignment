import axios from "axios";
import toast from "react-hot-toast";

const useUserUpdates = (setUsers) => {
  const handleEdit = async (id, updatedData) => {
    try {
      const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === id ? { ...user, ...updatedData } : user))
        );
        toast.success("User updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update user.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://reqres.in/api/users/${id}`);
      if (response.status === 204) {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        toast.success("User deleted successfully!");
      }
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  return { handleEdit, handleDelete };
};

export default useUserUpdates;
