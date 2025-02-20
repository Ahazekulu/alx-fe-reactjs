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
