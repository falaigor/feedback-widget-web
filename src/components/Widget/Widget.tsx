import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";
import { ModalFeedback } from "../Modal/ModalFeedback";

export const Widget = () => {
  return (
    <Popover
      data-testid="widget"
      className="absolute bottom-5 right-5 flex flex-col items-end"
    >
      <Popover.Panel>
        <ModalFeedback />
      </Popover.Panel>

      <Popover.Button
        data-testid="button"
        className="flex items-center bg-brand-500 hover:bg-brand-300 rounded-full px-3 h-12 text-white group"
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2">Feedback</span>
        </span>
      </Popover.Button>
    </Popover>
  );
};
