import { useState } from "react";

import bugImageUrl from "../../images/bug.svg";
import thoughtImageUrl from "../../images/thought.svg";
import ideaImageUrl from "../../images/idea.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackTypeContent } from "./Steps/FeedbackTypeContent";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Icone de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Icone de uma lampada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Icone de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div
      data-testid="widget-form"
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 text-white flex flex-col justify-between items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackTypeContent
          feedbackType={feedbackType}
          onFeedbackRestartRequest={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
