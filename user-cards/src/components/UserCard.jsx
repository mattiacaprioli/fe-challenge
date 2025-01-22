import React, { useState } from 'react';

export default function UserCard({ user, onFavorite, isFavorite }) {
  const [flipped, setFlipped] = useState(false);


  return (
    <div
      className="relative w-64 h-96 bg-white rounded-lg shadow-lg flex flex-col items-center p-4 transition-transform transform hover:scale-105"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Lato frontale */}
      {!flipped ? (
        <div className="text-center">
          <img
            src={user.avatar} // Cambiato in base alla nuova struttura
            alt={`${user.first_name} ${user.last_name}`}
            className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-200"
          />
          <h3 className="font-bold text-lg text-gray-800">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ) : (
        // Lato posteriore
        <div className="text-center">
          <p className="text-sm text-gray-800">{user.username}</p>
          <p className="text-sm text-gray-800">{user.phone_number}</p>
          <p className="text-sm text-gray-800 font-semibold">
            {user.employment.title}
          </p>
          <p className="text-sm text-gray-800">
            {user.address.city}, {user.address.country}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevenire il flip durante il clic sul pulsante
              onFavorite(user);
            }}
            className={`mt-4 px-4 py-2 rounded-lg font-semibold ${
              isFavorite
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      )}
    </div>
  );
}
