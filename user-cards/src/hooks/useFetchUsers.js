import { useState } from 'react';

export default function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchUsers() {
    if (loading) return;
    setLoading(true);
    await fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then((response) => response.json())
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data]);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return { users, fetchUsers, loading };
}
