import React, { useEffect, useState } from "react";
import useFetchUsers from "../hooks/useFetchUsers";
import UserCard from "./UserCard";
import { useCookies } from "react-cookie";

export default function UserList() {
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

  return (
    <div className="text-center">
      <h1 className="text-4xl font-extrabold mb-8 text-white">User Cards</h1>

      {/* FAVORITES */}
      {favorites.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-green-400/70 mb-4">
            Favorites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {favorites.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                isFavorite={true}
                onFavorite={() => handleFavorite(user)}
              />
            ))}
          </div>
        </>
      )}

      {/* OTHER USERS */}
      <h2 className="text-2xl font-bold text-gray-300 mt-8 mb-4">
        Other Users
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
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
        className="mt-8 px-6 py-3 
          rounded-full font-semibold text-white 
          bg-gradient-to-r from-pink-600 to-pink-400
          hover:opacity-80 transition-opacity duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          shadow-[0_0_10px_rgba(236,72,153,0.7)]
        "
        onClick={handleFetchMore}
        disabled={loading}
      >
        {loading ? "Loading..." : `Fetch 10 More Users`}
      </button>
    </div>
  );
}
