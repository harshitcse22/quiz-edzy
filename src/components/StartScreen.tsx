"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchQuizQuestions } from "@/lib/api";
import { useQuizStore } from "@/store/useQuizStore";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const SUBJECTS = ["Class 10 - English", "Class 10 - Science", "Class 10 - Math"];

export default function StartScreen() {
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const [count, setCount] = useState("5");
  const setQuestions = useQuizStore((state) => state.setQuestions);

  const { refetch, isFetching } = useQuery({
    queryKey: ["quizQuestions", subject, Number(count)],
    queryFn: () => fetchQuizQuestions(subject, Number(count)),
    enabled: false,
  });

  const handleStart = async () => {
    const { data } = await refetch();
    if (data?.data?.questions) {
      setQuestions(data.data.questions);
    }
  };

  return (
    <Card className="w-full max-w-md shadow-lg border-primary/10 mx-auto">
      <CardHeader className="space-y-1 pb-4 sm:pb-6">
        <CardTitle className="text-2xl sm:text-3xl font-extrabold text-center tracking-tight text-primary">
          Quiz Mastery
        </CardTitle>
        <CardDescription className="text-center text-muted-foreground text-xs sm:text-sm font-medium px-2">
          Select your subject and the number of questions to benchmark your knowledge!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="subject" className="text-sm font-semibold">
            Choose Subject
          </Label>
          <Select value={subject} onValueChange={(val) => val && setSubject(val)}>
            <SelectTrigger id="subject" className="h-12 bg-muted/50 transition-colors hover:bg-muted font-medium">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {SUBJECTS.map((sub) => (
                <SelectItem key={sub} value={sub} className="cursor-pointer">
                  {sub}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-3">
          <Label htmlFor="count" className="text-sm font-semibold">
            Number of Questions
          </Label>
          <Select value={count} onValueChange={(val) => val && setCount(val)}>
            <SelectTrigger id="count" className="h-12 bg-muted/50 transition-colors hover:bg-muted font-medium">
              <SelectValue placeholder="Select count" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5" className="cursor-pointer">5 Questions</SelectItem>
              <SelectItem value="10" className="cursor-pointer">10 Questions</SelectItem>
              <SelectItem value="15" className="cursor-pointer">15 Questions</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button
          onClick={handleStart}
          className="w-full h-12 text-md font-bold transition-all hover:scale-[1.02] active:scale-95 shadow-md"
          disabled={isFetching}
        >
          {isFetching ? "Preparing Quiz..." : "Start Quiz"}
        </Button>
      </CardFooter>
    </Card>
  );
}
