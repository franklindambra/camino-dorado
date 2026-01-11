import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export interface Section {
  title: string;
  description: string;
}

interface Props {
  data: Section[];
}

export default ({ data }: Props) => (
  <Accordion.Root type="single" collapsible>
    {data.map((service, i) => (
      <Accordion.Item key={i} value={`item-${i + 1}`} className="rounded-lg">
        <Accordion.Header className="flex rounded-lg">
          <Accordion.Trigger className="AccordionTrigger p-5 cursor-pointer bg-gray-200 flex items-center gap-5 w-full rounded mb-2">
            {service.title}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent">
          <p className="p-5 opacity-70">{service.description}</p>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);
