import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (initialPage = 1) => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  return { users, page, setPage, totalPages, loading, setUsers };
};

export default useFetch;
