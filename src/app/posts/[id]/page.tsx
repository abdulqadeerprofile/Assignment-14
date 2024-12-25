import React from 'react';

interface PostsProps {
  params: {
    id: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = async (props: PostsProps) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/users/${props.params.id}/posts`);
  const posts: Post[] = await url.json();

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <a
            href={`/main/${post.id}`}
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-md text-left w-full 
                     transform transition-all duration-500 ease-out
                     hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 
                     hover:bg-gray-50
                     active:scale-[0.99] active:shadow-md active:translate-y-0
                     cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-2 transition-colors duration-500 group-hover:text-blue-600">
              {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Posts;
