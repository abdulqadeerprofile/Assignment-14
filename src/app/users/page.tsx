"use client";

const Users = async () => {
  const url = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await url.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {res.map((user: any, id: number) => {
          return (
            <div
              key={user.id}
              className="group bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              {/* User Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
              {user.name.charAt(0)}
            </div>
                </div>
                <h2 className="text-xl font-semibold text-center mb-2">{user.name}</h2>
                <p className="text-gray-600 text-center mb-4">{user.email}</p>

                {/* Action Buttons */}
                <div className="space-y-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href={`/users/${user.id}`}
                    className="block w-full py-2 bg-red-500 text-white rounded text-center hover:bg-red-600 transition-colors duration-300"
                  >
                    User Data
                  </a>
                  <a
                    href={`/posts/${user.id}`}
                    className="block w-full py-2 bg-blue-500 text-white rounded text-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    Posts
                  </a>
                  <a
                    href={`/albums/${user.id}`}
                    className="block w-full py-2 bg-purple-500 text-white rounded text-center hover:bg-purple-600 transition-colors duration-300"
                  >
                    Albums
                  </a>
                  <a
                    href={`/todos/${user.id}`}
                    className="block w-full py-2 bg-green-500 text-white rounded text-center hover:bg-green-600 transition-colors duration-300"
                  >
                    Todos
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
