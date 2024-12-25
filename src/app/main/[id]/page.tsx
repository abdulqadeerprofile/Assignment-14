import React from 'react';

const PostPage = async(props:any) => {
  const url = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}/comments`)
  const comments = await url.json()
  const url2 = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.id}`)
  const data = await url2.json()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <article className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        <p className="text-lg text-gray-700">
          {data.body}
        </p>
      </article>

      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Comments ({comments.length})</h2>
        <div className="space-y-6">
          {comments.map((comment:any, index:any) => (
            <div key={index} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white font-semibold uppercase">{comment.name[0]}</span>
              </div>
              <div>
                <p className="font-semibold">{comment.name}</p>
                <p className="text-gray-600">{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PostPage;