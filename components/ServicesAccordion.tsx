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
  <Accordion.Root type="single" collapsible className="shadow-lg">
    {data.map((service, i) => (
      <Accordion.Item key={i} value={`item-${i + 1}`}>
        <Accordion.Header className="flex">
          <Accordion.Trigger className="AccordionTrigger p-5 cursor-pointer bg-gray-200 flex items-center gap-5 w-full">
            {service.title}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="AccordionContent ">
          <p className="p-5">{service.description}</p>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);
