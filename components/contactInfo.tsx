import { DataList } from "@chakra-ui/react";

const stats = [
  { label: "Email", value: "masrayhan2000@gmail.com" },
  { label: "Phone", value: "+62 812 2098 5945" },
  { label: "Location", value: "Gresik, Indonesia" },
];

export default function ContactInfo() {
  return (
    <DataList.Root>
      {stats.map((item) => (
        <DataList.Item
          key={item.label}
          className="flex flex-col items-center md:items-start"
        >
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList.Root>
  );
}
