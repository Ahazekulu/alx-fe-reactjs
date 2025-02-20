import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;

// src/ProfilePage.jsx
import UserInfo from './UserInfo';

function ProfilePage() {
  return <UserInfo />;
}

export default ProfilePage;


// src/components/UserProfile.jsx
import React, { useContext } from 'react'; // Import React and useContext
import UserContext from './UserContext'; // Import UserContext

function UserProfile() {
  // Consume the UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
