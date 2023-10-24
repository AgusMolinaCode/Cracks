'use client';

import { UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";

const Signed = () => {

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div className="flex gap-4 items-center">
      {isLoading ?(
          <div>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          null
        ) }
        
    </div>
  );
};

export default Signed;