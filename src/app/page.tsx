"use client";

import { useQuizStore } from "@/store/useQuizStore";
import StartScreen from "@/components/StartScreen";
import QuizScreen from "@/components/QuizScreen";
import ResultScreen from "@/components/ResultScreen";

export default function Home() {
  const { questions, isFinished } = useQuizStore();

  return (
    <main className="bg-zinc-50 dark:bg-zinc-950 min-h-screen w-full font-sans text-foreground">
      {questions.length === 0 ? (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
          <StartScreen />
        </div>
      ) : isFinished ? (
        <ResultScreen />
      ) : (
        <QuizScreen />
      )}
    </main>
  );
}
