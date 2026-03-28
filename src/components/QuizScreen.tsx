"use client";

import { useState, useEffect } from "react";
import { useQuizStore } from "@/store/useQuizStore";
import { X, Heart, RefreshCw, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const QUESTION_TIMEOUT = 30; // 30 seconds per question

export default function QuizScreen() {
  const {
    questions,
    currentQuestionIndex,
    selectedAnswer,
    hasSubmittedCurrent,
    wrongAttempts,
    setSelectedAnswer,
    submitAnswer,
    retryQuestion,
    nextQuestion,
    finishQuiz,
    resetQuiz,
    handleTimeUp
  } = useQuizStore();

  const currentQ = questions[currentQuestionIndex];
  
  // task1) Per-question timer state
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIMEOUT);

  // Reset timer on question change
  useEffect(() => {
    setTimeLeft(QUESTION_TIMEOUT);
  }, [currentQuestionIndex]);

  // Timer countdown logic
  useEffect(() => {
    if (hasSubmittedCurrent) return;
    
    if (timeLeft <= 0) {
      handleTimeUp();
      return;
    }
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, hasSubmittedCurrent, handleTimeUp]);

  if (!currentQ) return null;

  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  // Calculate timer progress
  const timerPercentage = (timeLeft / QUESTION_TIMEOUT) * 100;

  const isSelected = (optionId: string) => selectedAnswer === optionId;
  const isCorrectOption = (optionId: string) => optionId === currentQ.questionInfo?.option;

  // task2) Enhanced shadows, smooth transitions, and heavily rounded UI applied throughout
  const getOptionStyles = (optionId: string) => {
    if (!hasSubmittedCurrent) {
      if (isSelected(optionId)) {
        return "border-primary bg-primary/10 shadow-lg shadow-primary/20 ring-2 ring-primary ring-offset-2 scale-[1.02] transform transition-all duration-300 ease-out rounded-2xl";
      }
      return "border-border hover:border-primary/50 hover:shadow-md hover:bg-muted/50 cursor-pointer text-foreground group transition-all duration-300 ease-out rounded-2xl";
    }
    
    if (isCorrectOption(optionId) && isSelected(optionId)) {
      return "border-green-500 bg-green-500/15 text-green-700 font-bold shadow-xl shadow-green-500/20 ring-2 ring-green-500 ring-offset-2 z-10 transition-all duration-500 ease-out rounded-2xl scale-[1.02]";
    }
    
    if (isSelected(optionId) && !isCorrectOption(optionId)) {
      return "border-red-500 bg-red-500/15 text-red-700 font-bold opacity-90 ring-2 ring-red-500 ring-offset-2 shadow-lg shadow-red-500/20 transition-all duration-500 ease-out rounded-2xl";
    }
    
    return "border-border opacity-40 pointer-events-none transition-all duration-500 ease-out rounded-2xl"; 
  };
  
  const getBadgeNumber = (index: number) => index + 1;

  const getBadgeStyles = (optionId: string) => {
    if (!hasSubmittedCurrent) {
      if (isSelected(optionId)) {
        return "bg-primary text-primary-foreground shadow-md transition-all duration-300 rounded-xl"; 
      }
      return "bg-muted text-muted-foreground group-hover:bg-primary border border-transparent group-hover:shadow-md group-hover:text-primary-foreground transition-all duration-300 rounded-xl";
    }
    
    if (isCorrectOption(optionId) && isSelected(optionId)) {
      return "bg-green-500 text-white shadow-md rounded-xl";
    }
    if (isSelected(optionId) && !isCorrectOption(optionId)) {
      return "bg-red-500 text-white shadow-md rounded-xl";
    }
    
    return "bg-muted text-muted-foreground rounded-xl";
  };

  const isAnswerCorrect = selectedAnswer && isCorrectOption(selectedAnswer);

  return (
    <div className="w-full max-w-3xl mx-auto px-3 sm:px-4 md:px-8 flex flex-col min-h-[100dvh]">
      
      {/* HEADER SECTION */}
      <header className="flex items-center justify-between gap-2 sm:gap-4 pt-4 sm:pt-8 pb-2 sm:pb-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={resetQuiz} 
          className="text-muted-foreground hover:bg-red-50 hover:text-red-600 rounded-full transition-colors flex-shrink-0 shadow-sm w-8 h-8 sm:w-10 sm:h-10"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
        
        <div className="flex-1 px-2 sm:px-4 relative flex flex-col gap-1 sm:gap-2">
          <div className="flex justify-between text-[10px] sm:text-xs font-bold text-muted-foreground px-1 uppercase tracking-widest">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}%</span>
          </div>
          <Progress value={progressPercentage} className="h-2 sm:h-3 bg-muted shadow-inner rounded-full" />
        </div>
        
        <div className="flex items-center text-red-500 font-bold gap-1 sm:gap-1.5 text-sm sm:text-lg select-none flex-shrink-0 bg-red-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-sm">
          <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current animate-pulse duration-1000" />
          <span className="tabular-nums text-center">{wrongAttempts}</span>
        </div>
      </header>

      {/* TIMER VISUAL */}
      <div className="px-2 lg:px-4 mb-8">
        <div className="flex items-center justify-between text-sm font-bold opacity-80 mb-2">
          <div className={`flex items-center gap-1.5 uppercase tracking-widest transition-colors duration-300 ${timeLeft <= 5 ? 'text-red-500' : 'text-primary'}`}>
             <Clock className={`w-4 h-4 ${timeLeft <= 5 && !hasSubmittedCurrent ? 'animate-bounce' : ''}`} />
             <span>{timeLeft > 0 ? `Time Left: ${timeLeft}s` : "Time's Up!"}</span>
          </div>
        </div>
        {!hasSubmittedCurrent && (
           <Progress 
             value={timerPercentage} 
             className={`h-1.5 shadow-inner rounded-full transition-all duration-1000 ease-linear ${timeLeft <= 5 ? 'bg-red-100 [&>div]:bg-red-500' : 'bg-primary/10 [&>div]:bg-primary'}`} 
           />
        )}
      </div>

      {/* QUESTION SECTION */}
      <div className="mb-6 sm:mb-10 px-1 sm:px-2 lg:px-4">
        <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-2 sm:mb-3 uppercase tracking-widest opacity-80">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-foreground leading-snug tracking-tight drop-shadow-sm">
          {currentQ.text}
        </h2>
      </div>

      {/* OPTIONS LIST */}
      <div className="space-y-3 sm:space-y-4 flex-1 outline-none px-1 sm:px-2 lg:px-4">
        {currentQ.optionOrdering.map((option, index) => (
          <Card 
            key={option._id}
            className={`${getOptionStyles(option._id)} border-2`}
            onClick={() => {
              if (!hasSubmittedCurrent && timeLeft > 0) {
                setSelectedAnswer(option._id);
              }
            }}
          >
            <CardContent className="p-3 sm:p-4 md:p-5 flex items-center select-none gap-3 sm:gap-4">
              <div 
                className={`flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 min-w-[2rem] sm:min-w-[2.75rem] font-black text-base sm:text-lg ${getBadgeStyles(option._id)}`}
              >
                {getBadgeNumber(index)}
              </div>
              
              <span className={`text-base sm:text-lg md:text-xl font-medium tracking-wide transition-colors duration-300 ${isSelected(option._id) ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                {option.text}
              </span>
            </CardContent>
          </Card>
        ))}
        
        {/* EXPLANATION REVEAL */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${(hasSubmittedCurrent && isAnswerCorrect) ? "max-h-96 opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}`}>
            {currentQ.questionInfo?.solution && (
              <div className="p-6 bg-primary/5 rounded-3xl border border-primary/20 shadow-lg shadow-primary/5">
                <span className="text-xs font-black uppercase tracking-widest text-primary mb-2 block flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Solution Breakdown
                </span>
                <p className="text-md font-medium text-foreground leading-relaxed">
                  {currentQ.questionInfo.solution}
                </p>
              </div>
            )}
        </div>
      </div>

      {/* SUBMIT BUTTON FOOTER */}
      <footer className="pt-6 pb-12 sticky bottom-0 bg-transparent px-2 lg:px-4 mt-auto">
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 to-transparent pointer-events-none -z-10" />
        
        {!hasSubmittedCurrent ? (
          <Button 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl tracking-wide font-extrabold shadow-xl shadow-primary/20 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]" 
            onClick={submitAnswer}
            disabled={!selectedAnswer || timeLeft <= 0}
            size="lg"
          >
            {timeLeft > 0 ? "Check Answer" : "Time's Up!"}
          </Button>
        ) : isAnswerCorrect ? (
          <Button 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl tracking-wide font-extrabold shadow-xl shadow-green-500/20 rounded-2xl bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700 text-white transition-all duration-300 animate-in slide-in-from-bottom-2 hover:scale-[1.02] active:scale-[0.98]" 
            onClick={() => {
              if (currentQuestionIndex === totalQuestions - 1) {
                useQuizStore.getState().finishQuiz();
              } else {
                nextQuestion();
              }
            }}
            size="lg"
          >
            {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Continue"}
          </Button>
        ) : (
          <Button 
            className="w-full h-14 sm:h-16 text-lg sm:text-xl tracking-wide font-extrabold shadow-xl shadow-orange-500/20 rounded-2xl bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 text-white transition-all duration-300 animate-in slide-in-from-bottom-2 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]" 
            onClick={retryQuestion}
            size="lg"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </Button>
        )}
      </footer>
    </div>
  );
}
