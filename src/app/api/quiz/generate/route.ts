import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Usually, you would extract the body and fetch dynamic data based on it:
  // const { subject, numberOfQuestions } = await req.json();

  // Mock API Response Data
  const mockData = {
    status: 200,
    success: true,
    error: null,
    message: "Quiz details fetched successfully for the given exam subject",
    data: {
      examSubject: {
        _id: "66ab5c44543b6f461d7a9cf4",
        title: "Class 10 - English",
      },
      questions: [
        {
          _id: "6999442d4b194a07e604c33b",
          exam: {
            _id: "66ab5807ffbb5019db72215a",
            seoTitle: "Class 10",
          },
          examSubject: {
            _id: "66ab5c44543b6f461d7a9cf4",
            title: "Class 10 - English",
          },
          examSubjectBook: {
            _id: "66ae541b191fdf5766655b5c",
            title: "First Flight",
          },
          examSubjectBookChapter: {
            _id: "66d6db15eb8a6478e85e0c94",
            title: "A Tiger in the Zoo",
          },
          text: "How does the poem illustrate the contrast between the tiger's life in the zoo and in the wild?",
          type: "MCQ_SA",
          media: null,
          optionOrdering: [
            {
              _id: "6999442d4b194a07e604c352",
              text: "Through vibrant imagery",
              media: null,
            },
            {
              _id: "6999442d4b194a07e604c37d",
              text: "By describing its dreams",
              media: null,
            },
            {
              _id: "6999442d4b194a07e604c3a8",
              text: "By showing human interactions",
              media: null,
            },
            {
              _id: "6999442d4b194a07e604c3d3",
              text: "Through historical context",
              media: null,
            },
          ],
          questionInfo: {
            _id: "6999442d4b194a07e604c3fe",
            question: "6999442d4b194a07e604c33b",
            option: "6999442d4b194a07e604c352",
            media: null,
            solution: "The poem illustrates the contrast through vibrant imagery, depicting the freedom of the wild versus the confinement of the zoo.",
          },
        },
        {
          _id: "699948c74b194a07e60fb0e0",
          exam: {
            _id: "66ab5807ffbb5019db72215a",
            seoTitle: "Class 10",
          },
          examSubject: {
            _id: "66ab5c44543b6f461d7a9cf4",
            title: "Class 10 - English",
          },
          examSubjectBook: {
            _id: "66ae541b191fdf5766655b52",
            title: "Foot Prints Without feet",
          },
          examSubjectBookChapter: {
            _id: "66c70feb5ad974e312ade189",
            title: "The Thief’s Story",
          },
          text: "Which of the following best describes Hari Singh's initial relationship with Anil?",
          type: "MCQ_SA",
          media: null,
          optionOrdering: [
            {
              _id: "699948c74b194a07e60fb0f0",
              text: "Friendly but transactional",
              media: null,
            },
            {
              _id: "699948c74b194a07e60fb10d",
              text: "Skeptical and distant",
              media: null,
            },
            {
              _id: "699948c74b194a07e60fb12a",
              text: "Manipulative and deceitful",
              media: null,
            },
            {
              _id: "699948c74b194a07e60fb147",
              text: "Cordial and collaborative",
              media: null,
            },
          ],
          questionInfo: {
            _id: "699948c74b194a07e60fb164",
            question: "699948c74b194a07e60fb0e0",
            option: "699948c74b194a07e60fb12a",
            media: null,
            solution: "Hari's relationship with Anil starts as manipulative as he lies about his abilities and uses flattery to gain trust for ulterior motives.",
          },
        },
        {
          _id: "69ad0624df9ceb0e24b21a76",
          exam: {
            _id: "66ab5807ffbb5019db72215a",
            seoTitle: "Class 10",
          },
          examSubject: {
            _id: "66ab5c44543b6f461d7a9cf4",
            title: "Class 10 - English",
          },
          examSubjectBook: {
            _id: "66ae541b191fdf5766655b5c",
            title: "First Flight",
          },
          examSubjectBookChapter: {
            _id: "66d6dafaeb8a6478e85e0c2f",
            title: "Nelson Mandela: Long Walk to Freedom",
          },
          text: "What does Mandela imply about the recognition of rights and freedoms in South Africa?",
          type: "MCQ_SA",
          media: null,
          optionOrdering: [
            {
              _id: "69ad0624df9ceb0e24b21af2",
              text: "They have become irrelevant.",
              media: null,
            },
            {
              _id: "69ad0624df9ceb0e24b21b34",
              text: "They are essential for national healing.",
              media: null,
            },
            {
              _id: "69ad0624df9ceb0e24b21b6a",
              text: "They are achieving no real progress.",
              media: null,
            },
            {
              _id: "69ad0624df9ceb0e24b21b91",
              text: "They will create more division.",
              media: null,
            },
          ],
          questionInfo: {
            _id: "69ad0624df9ceb0e24b21bb2",
            question: "69ad0624df9ceb0e24b21a76",
            option: "69ad0624df9ceb0e24b21b34",
            media: null,
            solution: "Mandela implies that recognition of rights and freedoms is essential for national healing, making option B correct. The others misinterpret the role of rights in a healthy society.",
          },
        },
        {
          _id: "69c24da757561653587e99c8",
          exam: {
            _id: "66ab5807ffbb5019db72215a",
            seoTitle: "Class 10",
          },
          examSubject: {
            _id: "66ab5c44543b6f461d7a9cf4",
            title: "Class 10 - English",
          },
          examSubjectBook: {
            _id: "66ae541b191fdf5766655b5c",
            title: "First Flight",
          },
          examSubjectBookChapter: {
            _id: "67e0c435f04c55cdf45a914f",
            title: "Dust of Snow",
          },
          text: "In what way does 'Dust of Snow' illustrate a change in mood?",
          type: "MCQ_SA",
          media: null,
          optionOrdering: [
            {
              _id: "69c24da757561653587e9a65",
              text: "Through the use of colors",
              media: null,
            },
            {
              _id: "69c24da757561653587e9a7b",
              text: "By the interaction with nature",
              media: null,
            },
            {
              _id: "69c24da757561653587e9a92",
              text: "With a narrative story",
              media: null,
            },
            {
              _id: "69c24da757561653587e9aaa",
              text: "By emotional dialogue",
              media: null,
            },
          ],
          questionInfo: {
            _id: "69c24da757561653587e9acb",
            question: "69c24da757561653587e99c8",
            option: "69c24da757561653587e9a7b",
            media: null,
            solution: "The poem illustrates a change in mood through the interaction with nature, particularly how the falling snow from the tree alters the speaker's feelings from regret to hope.",
          },
        },
        {
          _id: "69c27be29f86123ddca477f6",
          exam: {
            _id: "66ab5807ffbb5019db72215a",
            seoTitle: "Class 10",
          },
          examSubject: {
            _id: "66ab5c44543b6f461d7a9cf4",
            title: "Class 10 - English",
          },
          examSubjectBook: {
            _id: "66ae541b191fdf5766655b5c",
            title: "First Flight",
          },
          examSubjectBookChapter: {
            _id: "66d6db25eb8a6478e85e0d00",
            title: "The Ball Poem",
          },
          text: "How does the boy's reaction reflect his maturity?",
          type: "MCQ_SA",
          media: null,
          optionOrdering: [
            {
              _id: "69c27be29f86123ddca4780e",
              text: "He tries to replace the ball immediately",
              media: null,
            },
            {
              _id: "69c27be29f86123ddca4782f",
              text: "He expresses his feelings openly",
              media: null,
            },
            {
              _id: "69c27be29f86123ddca47850",
              text: "He stands rigid, accepting the loss",
              media: null,
            },
            {
              _id: "69c27be29f86123ddca47871",
              text: "He ignores the situation altogether",
              media: null,
            },
          ],
          questionInfo: {
            _id: "69c27be29f86123ddca47892",
            question: "69c27be29f86123ddca477f6",
            option: "69c27be29f86123ddca47850",
            media: null,
            solution: "The correct answer is 'He stands rigid, accepting the loss'. This moment portrays the boy's growth in dealing with painful experiences, encapsulating a mature response to a difficult reality. The other options reflect less mature behaviors.",
          },
        },
      ],
    },
  };

  // Simulate network delay to make the UI look realistic
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(mockData);
}
