import { ClerkProvider } from "@clerk/nextjs";

export function ClerkProv({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>)
}
