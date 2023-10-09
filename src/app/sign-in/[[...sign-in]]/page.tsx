import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex justify-center pt-16">
      <SignIn />
    </div>
  );
}
