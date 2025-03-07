import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import { useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router Advanced Demo</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | 
          <Link to="/post/1">Post 1</Link> | <Link to="/post/2">Post 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/profile/*" // Use wildcard to allow nested routes in Profile
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Dynamic route component
function Post() {
  const { id } = useParams();
  return <div>Dynamic Post ID: {id}</div>;
}

export default App;
