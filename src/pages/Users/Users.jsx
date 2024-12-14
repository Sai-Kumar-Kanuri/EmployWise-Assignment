import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "@/components/UserCard/UserCard";
import { Button } from "@/components/ui/button";
import useLogOut from "@/hooks/useLogOut";
import toast from "react-hot-toast";
import useFetch from "@/hooks/useFetch";
import useUserUpdates from "@/hooks/useUserUpdates";

const Users = () => {
  // const [users, setUsers] = useState([]);
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  // const [loading, setLoading] = useState(false);
  const { logout } = useLogOut();
  const { users, page, setPage, totalPages, loading, setUsers} = useFetch();
  const { handleDelete, handleEdit } = useUserUpdates(setUsers);

  const handleLogout = () => {
    logout();
  }


  // const fetchUsers = async (page) => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  //     setUsers(response.data.data);
  //     setTotalPages(response.data.total_pages)
  //   } catch (error) {
  //     console.error("Error fetching users:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleEdit = async (id, updatedData) => {
  //   try {
  //     const response = await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
  //     if (response.status === 200) {
  //       setUsers(users.map(user => user.id === id ? { ...user, ...updatedData } : user));
  //       toast.success("User updated successfully!");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to update user.");
  //   }
  // };

  // const handleDelete = async (id) => {
  //   try {
  //     const response = await axios.delete(`https://reqres.in/api/users/${id}`);
  //     if (response.status === 204) {
  //       setUsers(users.filter(user => user.id !== id));
  //       toast.success("User deleted successfully!");
  //     }
  //   } catch (error) {
  //     toast.error("Failed to delete user.");
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers(page);
  // }, [page]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-center mb-6">User List</h1>

        <div className="text-center mb-4">
          <Button onClick={handleLogout} className="bg-red-500">
            Logout
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {loading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-6">
        <Button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <p>
          Page {page} of {totalPages}
        </p>
        <Button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Users;
