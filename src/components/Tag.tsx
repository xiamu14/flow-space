import { PropsWithChildren } from "react";

export default function Tag({ children }: PropsWithChildren<{}>) {
  return (
    <div className="border py-[2px] px-[3px] bg-[#f0f6fe] rounded-[6px] text-[10px] border-[#c7ddfb] w-fit text-[#395ad4] h-fit flex-shrink-0">
      {children}
    </div>
  );
}
