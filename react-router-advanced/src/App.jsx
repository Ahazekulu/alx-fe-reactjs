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
          <Link to="/post/1">Post 1</Link> | <Link to="/post/2">Post 2</Link> | 
          <Link to="/blog/1">Blog 1</Link> | <Link to="/blog/2">Blog 2</Link>
        </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="*" element={<div>404 - Not Found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Dynamic route component for posts
function Post() {
  const { id } = useParams();
  return <div>Dynamic Post ID: {id}</div>;
}

// Dynamic route component for blog posts
function BlogPost() {
  const { id } = useParams();
  return (
    <div>
      <h2>Blog Post</h2>
      <p>Blog Post ID: {id}</p>
      <p>This is a sample blog post content for ID {id}.</p>
    </div>
  );
}

export default App;
