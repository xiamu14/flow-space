import Showcase from "@/components/Showcase";

export default function Page({ params }: { params: { id: string } }) {
  return <Showcase id={params.id} />;
}
