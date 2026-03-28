export interface BaseEntity {
  _id: string;
}

export interface Exam extends BaseEntity {
  seoTitle: string;
}

export interface ExamSubject extends BaseEntity {
  title: string;
}

export interface ExamSubjectBook extends BaseEntity {
  title: string;
}

export interface ExamSubjectBookChapter extends BaseEntity {
  title: string;
}

export interface QuizOption extends BaseEntity {
  text: string;
  media: string | null;
}

export interface QuestionInfo extends BaseEntity {
  question: string; // ID referencing the question
  option: string; // ID referencing the correct option
  media: string | null;
  solution: string;
}

export interface QuizQuestion extends BaseEntity {
  exam: Exam;
  examSubject: ExamSubject;
  examSubjectBook: ExamSubjectBook;
  examSubjectBookChapter: ExamSubjectBookChapter;
  text: string;
  type: string;
  media: string | null;
  optionOrdering: QuizOption[];
  questionInfo: QuestionInfo;
}

export interface QuizData {
  examSubject: ExamSubject;
  questions: QuizQuestion[];
}

export interface QuizApiResponse {
  status: number;
  success: boolean;
  error: string | null;
  message: string;
  data: QuizData;
}

// Keeping these for potential submission logic later
export interface QuizSubmission {
  questionId: string;
  selectedOptionId: string;
}

export interface QuizSubmissionResponse {
  success: boolean;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  message?: string;
}
