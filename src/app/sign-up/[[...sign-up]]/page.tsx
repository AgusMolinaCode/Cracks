import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Suspense fallback={<div className="text-black text-center">Loading...</div>}>
        <SignUp />
      </Suspense>
    </div>
  );
}