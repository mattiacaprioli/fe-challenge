import React from "react";

export default function UserCard({ user, onFavorite, isFavorite }) {
  return (
    <div className="group relative w-64 h-96 [perspective:1000px]">
      {/* CARD */}
      <div
        className="relative w-full h-full transition-transform duration-500
                   [transform-style:preserve-3d] 
                   group-hover:[transform:rotateY(180deg)]"
      >
        {/* FRONT */}
        <div
          className={`absolute w-full h-full backface-hidden 
              bg-black/30 border 
              rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)]
              flex items-center justify-center
              text-white ${
                isFavorite
                  ? "border-2 border-green-400/50"
                  : "border-pink-400/30"
              }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {isFavorite && (
            <span className="absolute top-2 left-2 px-3 py-1 bg-green-500 text-black text-xs font-bold rounded-full shadow-[0_0_5px_rgba(0,255,0,0.8)]">
              FAVORITE
            </span>
          )}

          <div className="flex flex-col items-center font-mono uppercase tracking-wide">
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className={`rounded-full w-24 h-24 mx-auto mb-4 shadow-md border-2 ${
                isFavorite
                  ? "border-2 border-green-400/50"
                  : "border-pink-400/30"
              }`}
            />
            <h3 className="font-extrabold text-xl mb-1 text-pink-200">
              {user.first_name} {user.last_name}
            </h3>
            <p className="text-sm text-gray-200/80">{user.email}</p>
          </div>
        </div>

        {/* BACK */}
        <div
          className={`absolute w-full h-full backface-hidden 
              bg-black/30 border ${
                isFavorite
                  ? "border-2 border-green-400/50"
                  : "border-pink-400/30"
              }
              rounded-xl shadow-[0_0_15px_rgba(236,72,153,0.3)] 
              flex flex-col items-center p-6
              text-white gap-2 rotate-y-180 font-mono uppercase tracking-wide
              `}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <h3 className="font-extrabold text-xl mb-1 text-pink-200">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-xs text-gray-100">
            <span className="font-bold">Phone:</span> {user.phone_number}
          </p>
          <p className="text-xs text-gray-100">
            <span className="font-bold">Birth:</span> {user.date_of_birth}
          </p>
          <p className="text-xs text-gray-100">
            <span className="font-bold">City:</span> {user.address?.city}
          </p>
          <p className="text-xs text-gray-100">
            <span className="font-bold">State:</span> {user.address?.state}
          </p>
          <p className="text-xs text-gray-100">
            <span className="font-bold">Country:</span> {user.address?.country}
          </p>
          <p className="text-xs text-gray-100 mt-2">
            <span className="font-bold">Job:</span> {user.employment?.title}
          </p>

          <button
            className={`
              mt-auto px-4 py-2 rounded-full font-bold text-sm
              transition-colors duration-300
              shadow-[0_0_10px_rgba(236,72,153,0.7)]
              ${
                isFavorite
                  ? "bg-pink-600 hover:bg-pink-500"
                  : "bg-green-400 text-black hover:bg-green-300"
              }
            `}
            onClick={onFavorite}
          >
            {isFavorite ? "REMOVE" : "FAVORITE"}
          </button>
        </div>
      </div>
    </div>
  );
}
