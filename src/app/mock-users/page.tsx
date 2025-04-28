import { revalidatePath } from "next/cache";

interface MockUser {
  id: string;
  name: string;
}

export default async function MockUsers() {
  const data = await fetch("https://680f5a8d67c5abddd194efd9.mockapi.io/users");
  const users = await data.json();

  const addUser = async (formData: FormData) => {
    "use server";
    const name = formData.get("name");

    const res = await fetch(
      "https://680f5a8d67c5abddd194efd9.mockapi.io/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to create user");
    }

    const newUser = await res.json();
    revalidatePath("/mock-users");

    return newUser;
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl text-center">Mock Users</h1>
      <form action={addUser}>
        <input type="text" placeholder="Enter Name" name="name" required />
        <button type="submit">Submit</button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {users.map((user: MockUser) => (
          <div key={user.id} className="p-4 bg-amber-100 rounded">
            {user.name}
          </div>
        ))}
      </div>
    </div>
  );
}
