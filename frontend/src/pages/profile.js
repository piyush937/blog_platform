import React, { useEffect, useState } from 'react';
import { getProfile } from '../services/authService';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const data = await getProfile(token);
        setUser(data);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="profile">
      {user ? (
        <>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
