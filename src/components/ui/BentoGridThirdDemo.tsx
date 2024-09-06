import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto dark">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Define the props type for the Skeleton component
type SkeletonProps = {
  backgroundImage: string;
};

const Skeleton: React.FC<SkeletonProps> = ({ backgroundImage }) => (
  <div
    className="flex flex-1 w-full min-h-[11rem] rounded-xl"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  ></div>
);

const items = [
  {
    title: "PASUL 1",
    description: "Se încarcă imagini medicale și date clinice relevante (de exemplu, radiografii, tomografii).",
    header: <Skeleton backgroundImage="/assets/incarcare.png" />, // Replace with your image URL
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PASUL 2",
    description: "Modelul AI analizează noile imagini sau date medicale.",
    header: <Skeleton backgroundImage="/assets/analizare.png" />, // Replace with another image URL
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PASUL 3",
    description: "Rezultatele sunt prezentate într-un format detaliat cu diagnosticul și tratamentul pacientului.",
    header: <Skeleton backgroundImage="/assets/rezultat.png" />, // Another image URL
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
