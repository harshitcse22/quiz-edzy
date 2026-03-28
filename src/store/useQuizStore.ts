import { create } from 'zustand';
import { QuizQuestion } from '@/types';

interface QuizState {
  questions: QuizQuestion[];
  currentQuestionIndex: number;
  score: number;
  wrongAttempts: number;
  selectedAnswer: string | null;
  hasSubmittedCurrent: boolean;
  isFinished: boolean;

  // Actions
  setQuestions: (questions: QuizQuestion[]) => void;
  setSelectedAnswer: (optionId: string) => void;
  submitAnswer: () => void;
  retryQuestion: () => void;
  nextQuestion: () => void;
  handleTimeUp: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
}

export const useQuizStore = create<QuizState>((set) => ({
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  wrongAttempts: 0,
  selectedAnswer: null,
  hasSubmittedCurrent: false,
  isFinished: false,

  setQuestions: (questions) => 
    set({ 
      questions, 
      currentQuestionIndex: 0, 
      score: 0, 
      wrongAttempts: 0, 
      selectedAnswer: null,
      hasSubmittedCurrent: false,
      isFinished: false
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

  retryQuestion: () =>
    set({
      hasSubmittedCurrent: false,
      selectedAnswer: null,
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

  handleTimeUp: () => set((state) => {
    if (state.currentQuestionIndex === state.questions.length - 1) {
      return { wrongAttempts: state.wrongAttempts + 1, isFinished: true };
    }
    return {
      wrongAttempts: state.wrongAttempts + 1,
      currentQuestionIndex: state.currentQuestionIndex + 1,
      selectedAnswer: null,
      hasSubmittedCurrent: false
    };
  }),

  finishQuiz: () => set({ isFinished: true }),

  resetQuiz: () => 
    set({
      questions: [],
      currentQuestionIndex: 0,
      score: 0,
      wrongAttempts: 0,
      selectedAnswer: null,
      hasSubmittedCurrent: false,
      isFinished: false
    })
}));
