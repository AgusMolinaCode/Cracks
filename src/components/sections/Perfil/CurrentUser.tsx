import { currentUser } from "@clerk/nextjs";

export default async function CurrentUser() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <h1 className="text-2xl sm:text-4xl font-bold">Hola {user?.firstName}!</h1>
    </div>
  );
}
