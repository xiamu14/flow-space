import FlowEditor from "@/components/FlowEditor";

export default function Page({ params }: { params: { id: string } }) {
  return <FlowEditor id={params.id} />;
}
