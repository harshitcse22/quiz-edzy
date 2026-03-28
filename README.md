# Interactive Quiz Application

A beautiful, highly interactive quiz application built with Next.js (App Router), Zustand, TanStack React Query, and Shadcn UI. This project was engineered with a major focus on highly polished UX, fluid transition states, and mobile-first responsive design.

## 🚀 Features

* **Dynamic Data Loading**: Fetches quiz questions seamlessly using Axios intercepting simulated API endpoints powered by React Query.
* **Complex Zustand Store**: State management handles scores, incorrect attempts, active selected answers, per-question timers, and "is finished" flow states.
* **Premium Quiz UI**:
  * **Option Selection States**: Clicked options hover cleanly. If checked, options aggressively color code green for correct and red for incorrect.
  * **Strict Retry Loop Pattern**: Users must guess the right answer to move forward. The "Try Again" state locks incorrect responses while keeping the real answer hidden.
  * **Interactive Timers**: A customized `useEffect` ticking UI clock penalizes users dynamically. Timeouts strip the question away and force failure logic gracefully.
* **Result Screen Analytics**: Automatically parses raw score and accuracy calculation percentage upon quiz completion.
* **Responsive Styling Engine**: Fully leverages Tailwind CSS variables, CSS transitions (`scale-[1.02]`, `duration-300`), and drop shadows to ensure options naturally interact under any viewport.

## 🛠️ Technology Stack

* **Framework**: [Next.js](https://nextjs.org/) (App Router Context)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/) (Radix Primitives)
* **Icons**: [Lucide React](https://lucide.dev/)
* **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
* **Server State**: [TanStack React Query](https://tanstack.com/query/latest)
* **Type Safety**: TypeScript Strict Mode

## 💻 Getting Started

1. Clone or download the repository.
2. Ensure you have Node.js installed.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📂 Project Structure

* **`src/app/`**: Next.js App routing and central `<QueryProvider>` wrappers.
* **`src/components/`**: 
  * `StartScreen.tsx`: Initiates the quiz length and subject.
  * `QuizScreen.tsx`: The primary interface engine controlling state, CSS transitions, and evaluation logic.
  * `ResultScreen.tsx`: The final presentation screen summarizing accuracy and mistake scores.
* **`src/store/`**: Configuration for `useQuizStore.ts` tracking indices and answers.
* **`src/lib/`**: Axios APIs and Tailwind specific utility configuration.
* **`src/types/`**: Enforced object shapes for Questions, Options, and Subjects.
