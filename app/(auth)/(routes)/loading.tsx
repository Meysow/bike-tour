"use client";

import { Loader } from "@/components/ui/loader";

//TODO: mettre le loader au milieu de la page

const Loading = () => {
  return (
    <div className="flex h-full w-full items-center justify-center mt-[25%]">
      <Loader />
    </div>
  );
};

export default Loading;
