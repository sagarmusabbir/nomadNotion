import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function Btn(props: string) {
  return (
    <Button outline color="light" size="sm">
      About
    </Button>
  );
}

export function BtnGrp() {
  return (
    <div className="flex flex-wrap gap-1">
      <ButtonGroup outline>
        <Button color="light" size="sm">
          {/* <HiUserCircle className="mr-3 h-4 w-4" /> */}
          Profile
        </Button>
        <Button color="light" size="sm">
          {/* <HiAdjustments className="mr-3 h-4 w-4" /> */}
          Settings
        </Button>
        <Button color="light" size="sm">
          {/* <HiCloudDownload className="mr-3 h-4 w-4" /> */}
          Messages
        </Button>
      </ButtonGroup>
    </div>
  );
}
