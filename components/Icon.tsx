// components/Icon.tsx
import { IconType } from "react-icons";
import {
  RiJavascriptLine,
  RiLayout3Line,
  RiReactjsLine,
  RiHome6Line,
  RiBuilding4Line,
  RiStackLine,
  RiMoneyDollarCircleLine,
  RiComputerLine,
  RiCloudLine,
  RiSettings6Line,
  RiEmotion2Line,
  // Import other icons as needed
} from "react-icons/ri";

const iconMap: Record<string, IconType> = {
  RiJavascriptLine: RiJavascriptLine,

  RiLayout3Line: RiLayout3Line,
  RiReactjsLine: RiReactjsLine,
  RiHome6Line: RiHome6Line,
  RiBuilding4Line: RiBuilding4Line,
  RiStackLine: RiStackLine,
  RiMoneyDollarCircleLine: RiMoneyDollarCircleLine,
  RiComputerLine: RiComputerLine,
  RiCloudLine: RiCloudLine,
  RiSettings6Line: RiSettings6Line,
  RiEmotion2Line: RiEmotion2Line,

  // Add more mappings as needed
};

interface IconProps {
  topicName: string;
  className?: string;
}

export const Icon = ({
  topicName,
  className = "w-10 h-10 fill-slate-50",
}: IconProps) => {
  //   const IconComponent = iconMap[topicName.toLowerCase()];
  const iconName = topicName.startsWith("Ri") ? topicName : `Ri${topicName}`;
  const IconComponent = iconMap[iconName];

  if (!IconComponent) {
    console.log(`No icon found for: ${iconName}`); // Helpful for debugging
    return null;
  }

  return <IconComponent className={className} />;
};
