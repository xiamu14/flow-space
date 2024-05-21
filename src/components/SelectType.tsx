import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function SelectType() {
  return (
    <Select>
      <SelectTrigger className="w-[100px] h-[36px] focus:ring-transparent">
        <SelectValue placeholder="Type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="link">Link</SelectItem>
          <SelectItem value="tag">Tag</SelectItem>
          <SelectItem value="file">File</SelectItem>
          <SelectItem value="paragraph">Paragraph</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
