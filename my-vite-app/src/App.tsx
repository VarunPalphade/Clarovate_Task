// src/App.tsx
import React from "react";
import AppRoutes from "./routes/AppRoutes"; // Import AppRoutes to handle routing

const App = () => {
  return (
    <div>
      {/* Render all routes within AppRoutes */}
      <AppRoutes />
    </div>
  );
};

export default App;
