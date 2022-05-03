import { Button } from "../Button/Button";

import iconBug from "../../images/Bug.svg";
import iconThought from "../../images/Thought.svg";
import iconIdea from "../../images/Idea.svg";

export const ModalFeedback = () => {
  return (
    <div
      data-testid="modal"
      className="bg-zinc-900 w-80 p-4 mb-2 rounded-lg text-white flex flex-col h-52 justify-between text-center"
    >
      <div>Deixe seu feedback</div>
      <div className="grid gap-2 grid-cols-3">
        <Button text="Problema" icon={iconBug} />
        <Button text="Ideia" icon={iconThought} />
        <Button text="Outro" icon={iconIdea} />
      </div>
      <div>Feito com ❤️ pela Rocketseat</div>
    </div>
  );
};
