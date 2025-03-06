import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Demo</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | 
          <Link to="/post/1">Post 1</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
          <Route path="/post/:id" element={<div>Dynamic Post ID: {window.location.pathname.split('/')[2]}</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
