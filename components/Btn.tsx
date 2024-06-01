import { Button, ButtonGroup } from "flowbite-react";
import { HiAdjustments, HiCloudDownload, HiUserCircle } from "react-icons/hi";

export default function Btn() {
  return (
    <Button outline color="light">
      About
    </Button>
  );
}

export function BtnGrp() {
  return (
    <div className="flex flex-wrap gap-2">
      <ButtonGroup outline>
        <Button color="light">
          <HiUserCircle className="mr-3 h-4 w-4" />
          Profile
        </Button>
        <Button color="light">
          <HiAdjustments className="mr-3 h-4 w-4" />
          Settings
        </Button>
        <Button color="light">
          <HiCloudDownload className="mr-3 h-4 w-4" />
          Messages
        </Button>
      </ButtonGroup>
    </div>
  );
}
