import React from "react";

function AppContainer({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-600">
      <div className="min-w-md rounded flex items-center justify-center  p-8 flex-col bg-slate-300 shadow-2xl ">
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
