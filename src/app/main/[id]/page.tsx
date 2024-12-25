import React from 'react';

interface MainProps {
  params: {
    id: string;
  };
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

const PostPage = async(props: MainProps) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}/comments`)
  const comments: Comment[] = await url.json()
  const url2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
  const data: Post = await url2.json()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="mb-8 bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
        <p className="text-gray-700 leading-relaxed">
          {data.body}
        </p>
      </article>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start gap-4 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-lg">{comment.name[0]}</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">{comment.name}</p>
                <p className="text-gray-600 text-sm">{comment.email}</p>
                <p className="text-gray-700 mt-2">{comment.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostPage;