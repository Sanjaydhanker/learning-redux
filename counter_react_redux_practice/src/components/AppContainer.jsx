import React from "react";

function AppContainer({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400">
      <div className="min-w-md p-8 rounded shadow-2xl bg-slate-50">
        {children}
      </div>
    </div>
  );
}

export default AppContainer;
