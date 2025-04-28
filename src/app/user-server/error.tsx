"use client";

import { useEffect } from "react";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="relative h-screen">
      <div className="text-red-500 text-2xl font-bold text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        Something went wrong!!
      </div>
    </div>
  );
}
