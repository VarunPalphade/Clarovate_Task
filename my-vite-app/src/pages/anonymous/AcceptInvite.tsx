// src/pages/anonymous/AcceptInvite.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const AcceptInvite = () => {
  const navigate = useNavigate();

  const handleAcceptInvite = () => {
    // Logic to accept invite (e.g., API call)
    navigate("/login"); // Redirect to login after accepting invite
  };

  return (
    <div className="accept-invite-container">
      <h2>Accept Invitation</h2>
      <button onClick={handleAcceptInvite}>Accept Invitation</button>
    </div>
  );
};

export default AcceptInvite;
