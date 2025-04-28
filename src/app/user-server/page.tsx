interface User {
  id: number;
  name: string;
  email: string;
}

export default async function UserServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1 className="text-2xl text-center ">User Server</h1>
      <ul className="p-4 space-y-4">
        {users.map((user: User) => (
          <li className="p-2 bg-amber-100 rounded" key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
