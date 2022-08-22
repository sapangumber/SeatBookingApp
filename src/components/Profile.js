import React from "react";
import AuthService from "../services/auth_service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.empid}</strong> Profile
        </h3>
      </header>

      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <p>
        <strong>Phone:</strong> {currentUser.phone}
      </p>
    </div>
  );
};

export default Profile;