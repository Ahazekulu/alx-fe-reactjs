import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
};

function PostsComponent() {
  const { 
    data, 
    isLoading, 
    isError, 
    error, 
    refetch, 
    isFetching,
    dataUpdatedAt 
  } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // 5 minutes
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchOnWindowFocus: false, // Disable auto-refetch on window focus
    keepPreviousData: true, // Keep previous data while refetching
  });

  if (isLoading) return <div>Loading posts for the first time...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Posts</h2>
      <div>
        <button onClick={() => refetch()} disabled={isFetching}>
          {isFetching ? 'Refetching...' : 'Refetch Posts'}
        </button>
        <p>
          Last updated: {new Date(dataUpdatedAt).toLocaleTimeString()} 
          {isFetching && '(Fetching in background...)'}
        </p>
      </div>
      <ul>
        {data.slice(0, 10).map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <div>
        <h4>Caching Demo Instructions:</h4>
        <p>1. Wait 1 minute: Data becomes stale (staleTime = 1min).</p>
        <p>2. Click "Refetch Posts": Forces a manual refetch.</p>
        <p>3. Navigate away and back: Data loads from cache (cacheTime = 5min).</p>
        <p>4. Note: Previous data stays visible during refetch (keepPreviousData).</p>
      </div>
    </div>
  );
}

export default PostsComponent;
