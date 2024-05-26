import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  flex?: boolean;
}
export default function Space({ className, flex }: Props) {
  return (
    <div
      className={cn(className, {
        "flex-1": flex,
      })}
    />
  );
}
