import React, { useEffect, useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UserCard from "./UserCard";
import { useCookies } from "react-cookie";

function UserList() {
  const { users, fetchUsers, loading } = useFetchUsers();
  const [cookies, setCookie] = useCookies(["favorites"]);
  const [favorites, setFavorites] = useState(cookies.favorites || []);

  useEffect(() => {
    setCookie("favorites", JSON.stringify(favorites), { path: "/" });
  }, [favorites, setCookie]);

  const handleFavorite = (user) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === user.id);
    const updatedFavorites = isAlreadyFavorite
      ? favorites.filter((fav) => fav.id !== user.id)
      : [...favorites, user];
    setFavorites(updatedFavorites);
  };

  const filteredUsers = users.filter(
    (user) => !favorites.some((fav) => fav.id === user.id)
  );

  const handleFetchMore = () => {
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("favorites", cookies.favorites);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">User Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Mostra i preferiti per primi */}
        {favorites.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite={true}
            onFavorite={() => handleFavorite(user)}
          />
        ))}
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            isFavorite={false}
            onFavorite={() => handleFavorite(user)}
          />
        ))}
      </div>
      <button
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleFetchMore}
        disabled={loading}
      >
        {loading ? "Loading..." : `Fetch 10 More Users`}
      </button>
    </div>
  );
}

export default UserList;
