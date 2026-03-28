import axios from "axios";
import { QuizApiResponse } from "@/types";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchQuizQuestions = async (
  subject: string,
  numberOfQuestions: number
): Promise<QuizApiResponse> => {
  const response = await apiClient.post<QuizApiResponse>("/quiz/generate", {
    subject,
    numberOfQuestions,
  });

  return response.data;
};
