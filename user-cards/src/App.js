import React from "react";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#1B1931] via-[#44174E] to-[#E9BCB9] p-5 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto bg-black/30 backdrop-blur-sm rounded-xl shadow-xl p-8 border border-pink-400/30">
        <UserList />
      </div>
    </div>
  );
}

export default App;
