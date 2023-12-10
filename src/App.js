import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./_root/pages/Home";
import Explore from "./_root/pages/Explore";
import Saved from "./_root/pages/Saved";
import AllUsers from "./_root/pages/AllUsers";
import CreatePost from "./_root/pages/CreatePost";
import EditPost from "./_root/pages/EditPost";
import PostDetails from "./_root/pages/PostDetails";
import Profile from "./_root/pages/Profile";
import UpdateProfile from "./_root/pages/UpdateProfile";
import SigninForm from "./_auth/form/SigninForm";
import SignupForm from "./_auth/form/SignupForm";
import AuthLayout from "./_auth/AuthLayout";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Replace this with your authentication logic
    // For simplicity, just toggling the authentication status
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <main>
      <Routes>
        <Route path="/sign-up" element={<SignupForm onLogin={handleLogin} />} />
        <Route path="/sign-in" element={<SigninForm onLogin={handleLogin} />} />

        {/* Protected Routes */}
        {isAuthenticated ? (
          <Route
            path="/*"
            element={
              <AuthLayout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path="/explore" element={<Explore />} />
                  <Route path="/saved" element={<Saved />} />
                  <Route path="/all-users" element={<AllUsers />} />
                  <Route path="/create-post" element={<CreatePost />} />
                  <Route path="/update-post/:id" element={<EditPost />} />
                  <Route path="/posts/:id" element={<PostDetails />} />
                  <Route path="/profile/:id/*" element={<Profile />} />
                  <Route
                    path="/update-profile/:id"
                    element={<UpdateProfile />}
                  />
                </Routes>
              </AuthLayout>
            }
          />
        ) : (
          // Redirect to login if not authenticated
          <Route path="/*" element={<Navigate to="/sign-in" replace />} />
        )}
      </Routes>
      {/* <Toaster /> */}
    </main>
  );
};

export default App;
