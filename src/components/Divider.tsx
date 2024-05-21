import { cn } from "@/lib/utils";

interface Props {
  direction?: "vertical" | "horization";
}
export default function Divider({ direction = "horization" }: Props) {
  return (
    <div
      className={cn({
        "border-b": direction === "horization",
        "border-l": direction === "vertical",
      })}
    />
  );
}
