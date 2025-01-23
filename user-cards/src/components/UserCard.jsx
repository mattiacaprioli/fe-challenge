import React from 'react';

export default function UserCard({ user, onFavorite, isFavorite }) {
  return (
    <div className="relative w-64 h-96 bg-white rounded-lg shadow-lg flex flex-col items-center p-4 transition-transform transform hover:scale-105">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      <h3 className="font-bold text-lg text-gray-800">
        {user.first_name} {user.last_name}
      </h3>
      <p className="text-sm text-gray-600">{user.email}</p>
      <button
        className={`mt-4 px-4 py-2 rounded-lg font-semibold ${
          isFavorite ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
        }`}
        onClick={onFavorite}
      >
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}
