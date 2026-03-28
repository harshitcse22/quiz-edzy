import { create } from 'zustand';
import { QuizQuestion } from '@/types';

interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  wrongAttempts: number;
  selectedAnswer: string | null;
  hasSubmittedCurrent: boolean;

  // Actions
  setQuestions: (questions: QuizQuestion[]) => void;
  setSelectedAnswer: (optionId: string) => void;
  submitAnswer: () => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  wrongAttempts: 0,
  selectedAnswer: null,
  hasSubmittedCurrent: false,

  setQuestions: (questions) => 
    set({ 
      questions, 
      currentQuestionIndex: 0, 
      score: 0, 
      wrongAttempts: 0, 
      selectedAnswer: null,
      hasSubmittedCurrent: false
    }),
  
  setSelectedAnswer: (optionId) => 
    set((state) => ({ 
      // Prevent changing answer after it's submitted
      selectedAnswer: state.hasSubmittedCurrent ? state.selectedAnswer : optionId 
    })),
  
  submitAnswer: () => 
    set((state) => {
      if (state.hasSubmittedCurrent || !state.selectedAnswer || !state.questions[state.currentQuestionIndex]) {
        return state;
      }
      
      const currentQ = state.questions[state.currentQuestionIndex];
      // In our mock data structure, questionInfo.option contains the ID of the correct option
      const isCorrect = state.selectedAnswer === currentQ.questionInfo?.option;
      
      return {
        hasSubmittedCurrent: true,
        score: isCorrect ? state.score + 1 : state.score,
        wrongAttempts: !isCorrect ? state.wrongAttempts + 1 : state.wrongAttempts
      };
    }),

  nextQuestion: () => 
    set((state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        return { 
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedAnswer: null,
          hasSubmittedCurrent: false
        };
      }
      return state;
    }),

  resetQuiz: () => 
    set({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      wrongAttempts: 0,
      selectedAnswer: null,
      hasSubmittedCurrent: false
    })
}));
