"use client";

import { useQuizStore } from "@/store/useQuizStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

export default function ResultScreen() {
  const { score, wrongAttempts, questions, resetQuiz } = useQuizStore();
  
  // Calculate accuracy based on correct answers and mistakes made along the way
  const accuracy = Math.round((score / (score + wrongAttempts)) * 100) || 0;

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto p-4 flex flex-col justify-center min-h-screen animate-in fade-in zoom-in-95 duration-500">
      <Card className="shadow-2xl border-primary/20 text-center relative overflow-hidden">
        {/* Banner stripe */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary/50" />
        
        <CardHeader className="pt-8 pb-3 sm:pt-10 sm:pb-4">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Trophy className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-500 drop-shadow-lg" />
          </div>
          <CardTitle className="text-3xl sm:text-4xl font-extrabold tracking-tight">Quiz Complete!</CardTitle>
          <CardDescription className="text-base sm:text-lg mt-1 sm:mt-2 font-medium">Here is how you performed</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-500/10 border border-green-500/20 p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center space-y-1">
              <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mb-0.5 sm:mb-1" />
              <span className="text-3xl sm:text-4xl font-black text-green-700">{score}</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-green-600/80 tracking-widest mt-1 text-center">Correct</span>
            </div>
            
            <div className="bg-red-500/10 border border-red-500/20 p-3 sm:p-5 rounded-2xl flex flex-col items-center justify-center space-y-1">
               <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mb-0.5 sm:mb-1" />
               <span className="text-3xl sm:text-4xl font-black text-red-700">{wrongAttempts}</span>
               <span className="text-[10px] sm:text-xs font-bold uppercase text-red-600/80 tracking-widest mt-1 text-center">Mistakes</span>
            </div>
          </div>
          
          <div className="bg-muted p-5 rounded-2xl flex items-center justify-between px-6 border">
            <span className="font-semibold text-muted-foreground uppercase tracking-widest text-sm">Accuracy</span>
            <span className="text-2xl font-black">{accuracy}%</span>
          </div>
        </CardContent>

        <CardFooter className="pb-10 pt-4 px-6">
          {/*  Retry Logic : Reset state explicitly via resetQuiz mapped gracefully to Play Again */}
          <Button 
            onClick={resetQuiz}
            className="w-full h-16 text-xl tracking-wide font-extrabold shadow-lg rounded-2xl gap-3 active:scale-[0.98] transition-all"
            size="lg"
          >
            <RotateCcw className="w-6 h-6 stroke-[2.5]" />
            Play Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
