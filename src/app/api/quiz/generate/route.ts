import { NextResponse } from "next/server";

const englishQuestions = [
  {
    _id: "6999442d4b194a07e604c33b",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" },
    examSubjectBook: { _id: "66ae541b191fdf5766655b5c", title: "First Flight" },
    examSubjectBookChapter: { _id: "66d6db15eb8a6478e85e0c94", title: "A Tiger in the Zoo" },
    text: "How does the poem illustrate the contrast between the tiger's life in the zoo and in the wild?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "6999442d4b194a07e604c352", text: "Through vibrant imagery", media: null },
      { _id: "6999442d4b194a07e604c37d", text: "By describing its dreams", media: null },
      { _id: "6999442d4b194a07e604c3a8", text: "By showing human interactions", media: null },
      { _id: "6999442d4b194a07e604c3d3", text: "Through historical context", media: null },
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
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" },
    examSubjectBook: { _id: "66ae541b191fdf5766655b52", title: "Foot Prints Without feet" },
    examSubjectBookChapter: { _id: "66c70feb5ad974e312ade189", title: "The Thief’s Story" },
    text: "Which of the following best describes Hari Singh's initial relationship with Anil?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "699948c74b194a07e60fb0f0", text: "Friendly but transactional", media: null },
      { _id: "699948c74b194a07e60fb10d", text: "Skeptical and distant", media: null },
      { _id: "699948c74b194a07e60fb12a", text: "Manipulative and deceitful", media: null },
      { _id: "699948c74b194a07e60fb147", text: "Cordial and collaborative", media: null },
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
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" },
    examSubjectBook: { _id: "66ae541b191fdf5766655b5c", title: "First Flight" },
    examSubjectBookChapter: { _id: "66d6dafaeb8a6478e85e0c2f", title: "Nelson Mandela: Long Walk to Freedom" },
    text: "What does Mandela imply about the recognition of rights and freedoms in South Africa?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "69ad0624df9ceb0e24b21af2", text: "They have become irrelevant.", media: null },
      { _id: "69ad0624df9ceb0e24b21b34", text: "They are essential for national healing.", media: null },
      { _id: "69ad0624df9ceb0e24b21b6a", text: "They are achieving no real progress.", media: null },
      { _id: "69ad0624df9ceb0e24b21b91", text: "They will create more division.", media: null },
    ],
    questionInfo: {
      _id: "69ad0624df9ceb0e24b21bb2",
      question: "69ad0624df9ceb0e24b21a76",
      option: "69ad0624df9ceb0e24b21b34",
      media: null,
      solution: "Mandela implies that recognition of rights and freedoms is essential for national healing.",
    },
  },
  {
    _id: "69c24da757561653587e99c8",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" },
    examSubjectBook: { _id: "66ae541b191fdf5766655b5c", title: "First Flight" },
    examSubjectBookChapter: { _id: "67e0c435f04c55cdf45a914f", title: "Dust of Snow" },
    text: "In what way does 'Dust of Snow' illustrate a change in mood?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "69c24da757561653587e9a65", text: "Through the use of colors", media: null },
      { _id: "69c24da757561653587e9a7b", text: "By the interaction with nature", media: null },
      { _id: "69c24da757561653587e9a92", text: "With a narrative story", media: null },
      { _id: "69c24da757561653587e9aaa", text: "By emotional dialogue", media: null },
    ],
    questionInfo: {
      _id: "69c24da757561653587e9acb",
      question: "69c24da757561653587e99c8",
      option: "69c24da757561653587e9a7b",
      media: null,
      solution: "The poem illustrates a change in mood through the interaction with nature.",
    },
  },
  {
    _id: "69c27be29f86123ddca477f6",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" },
    examSubjectBook: { _id: "66ae541b191fdf5766655b5c", title: "First Flight" },
    examSubjectBookChapter: { _id: "66d6db25eb8a6478e85e0d00", title: "The Ball Poem" },
    text: "How does the boy's reaction reflect his maturity?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "69c27be29f86123ddca4780e", text: "He tries to replace the ball immediately", media: null },
      { _id: "69c27be29f86123ddca4782f", text: "He expresses his feelings openly", media: null },
      { _id: "69c27be29f86123ddca47850", text: "He stands rigid, accepting the loss", media: null },
      { _id: "69c27be29f86123ddca47871", text: "He ignores the situation altogether", media: null },
    ],
    questionInfo: {
      _id: "69c27be29f86123ddca47892",
      question: "69c27be29f86123ddca477f6",
      option: "69c27be29f86123ddca47850",
      media: null,
      solution: "The correct answer is 'He stands rigid, accepting the loss'. This moment portrays the boy's growth in dealing with painful experiences.",
    },
  },
];

const scienceQuestions = [
  {
    _id: "sci_1",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "sci_sub_1", title: "Class 10 - Science" },
    examSubjectBook: { _id: "sci_book_1", title: "NCERT Science" },
    examSubjectBookChapter: { _id: "sci_chap_1", title: "Chemical Reactions" },
    text: "What type of reaction is represented by: CaO + H2O -> Ca(OH)2 ?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "sci_1_1", text: "Combination Reaction", media: null },
      { _id: "sci_1_2", text: "Decomposition Reaction", media: null },
      { _id: "sci_1_3", text: "Displacement Reaction", media: null },
      { _id: "sci_1_4", text: "Double Displacement Reaction", media: null },
    ],
    questionInfo: {
      _id: "sci_info_1",
      question: "sci_1",
      option: "sci_1_1",
      media: null,
      solution: "Two or more substances combine to form a single product, hence it is a combination reaction.",
    },
  },
  {
    _id: "sci_2",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "sci_sub_1", title: "Class 10 - Science" },
    examSubjectBook: { _id: "sci_book_1", title: "NCERT Science" },
    examSubjectBookChapter: { _id: "sci_chap_2", title: "Acids, Bases and Salts" },
    text: "What is the pH range of human blood?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "sci_2_1", text: "6.5 - 7.0", media: null },
      { _id: "sci_2_2", text: "7.35 - 7.45", media: null },
      { _id: "sci_2_3", text: "8.0 - 8.5", media: null },
      { _id: "sci_2_4", text: "5.5 - 6.5", media: null },
    ],
    questionInfo: {
      _id: "sci_info_2",
      question: "sci_2",
      option: "sci_2_2",
      media: null,
      solution: "Human blood is slightly basic with a pH range of 7.35 - 7.45.",
    },
  },
  {
    _id: "sci_3",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "sci_sub_1", title: "Class 10 - Science" },
    examSubjectBook: { _id: "sci_book_1", title: "NCERT Science" },
    examSubjectBookChapter: { _id: "sci_chap_3", title: "Metals and Non-metals" },
    text: "Which of the following metals is a liquid at room temperature?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "sci_3_1", text: "Sodium", media: null },
      { _id: "sci_3_2", text: "Iron", media: null },
      { _id: "sci_3_3", text: "Mercury", media: null },
      { _id: "sci_3_4", text: "Aluminum", media: null },
    ],
    questionInfo: {
      _id: "sci_info_3",
      question: "sci_3",
      option: "sci_3_3",
      media: null,
      solution: "Mercury is the only metal that is liquid at standard room temperature and pressure.",
    },
  },
  {
    _id: "sci_4",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "sci_sub_1", title: "Class 10 - Science" },
    examSubjectBook: { _id: "sci_book_1", title: "NCERT Science" },
    examSubjectBookChapter: { _id: "sci_chap_4", title: "Life Processes" },
    text: "The process of breakdown of glucose into pyruvate takes place in the:",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "sci_4_1", text: "Cytoplasm", media: null },
      { _id: "sci_4_2", text: "Mitochondria", media: null },
      { _id: "sci_4_3", text: "Nucleus", media: null },
      { _id: "sci_4_4", text: "Chloroplast", media: null },
    ],
    questionInfo: {
      _id: "sci_info_4",
      question: "sci_4",
      option: "sci_4_1",
      media: null,
      solution: "Glycolysis (breakdown of glucose into pyruvate) occurs in the cytoplasm.",
    },
  },
  {
    _id: "sci_5",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "sci_sub_1", title: "Class 10 - Science" },
    examSubjectBook: { _id: "sci_book_1", title: "NCERT Science" },
    examSubjectBookChapter: { _id: "sci_chap_5", title: "Light - Reflection and Refraction" },
    text: "The focal length of a plane mirror is:",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "sci_5_1", text: "Positive", media: null },
      { _id: "sci_5_2", text: "Negative", media: null },
      { _id: "sci_5_3", text: "Zero", media: null },
      { _id: "sci_5_4", text: "Infinity", media: null },
    ],
    questionInfo: {
      _id: "sci_info_5",
      question: "sci_5",
      option: "sci_5_4",
      media: null,
      solution: "A plane mirror is essentially a spherical mirror with an infinite radius, making its focal length infinity.",
    },
  },
];

const mathQuestions = [
  {
    _id: "math_1",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "math_sub_1", title: "Class 10 - Math" },
    examSubjectBook: { _id: "math_book_1", title: "NCERT Math" },
    examSubjectBookChapter: { _id: "math_chap_1", title: "Real Numbers" },
    text: "The decimal representation of the rational number 11/(2^3 * 5^2) will terminate after how many decimal places?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "math_1_1", text: "1", media: null },
      { _id: "math_1_2", text: "2", media: null },
      { _id: "math_1_3", text: "3", media: null },
      { _id: "math_1_4", text: "4", media: null },
    ],
    questionInfo: {
      _id: "math_info_1",
      question: "math_1",
      option: "math_1_3",
      media: null,
      solution: "The highest power of 2 or 5 in the denominator is 3 (from 2^3). So, it will terminate after 3 decimal places.",
    },
  },
  {
    _id: "math_2",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "math_sub_1", title: "Class 10 - Math" },
    examSubjectBook: { _id: "math_book_1", title: "NCERT Math" },
    examSubjectBookChapter: { _id: "math_chap_2", title: "Polynomials" },
    text: "If one zero of the quadratic polynomial x² + 3x + k is 2, then the value of k is:",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "math_2_1", text: "10", media: null },
      { _id: "math_2_2", text: "-10", media: null },
      { _id: "math_2_3", text: "5", media: null },
      { _id: "math_2_4", text: "-5", media: null },
    ],
    questionInfo: {
      _id: "math_info_2",
      question: "math_2",
      option: "math_2_2",
      media: null,
      solution: "Substitute x=2 in the equation: (2)² + 3(2) + k = 0 => 4 + 6 + k = 0 => 10 + k = 0 => k = -10.",
    },
  },
  {
    _id: "math_3",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "math_sub_1", title: "Class 10 - Math" },
    examSubjectBook: { _id: "math_book_1", title: "NCERT Math" },
    examSubjectBookChapter: { _id: "math_chap_3", title: "Triangles" },
    text: "If triangle ABC is similar to triangle DEF, and AB = 1.2 cm, DE = 1.4 cm, then what is the ratio of their areas?",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "math_3_1", text: "36:49", media: null },
      { _id: "math_3_2", text: "6:7", media: null },
      { _id: "math_3_3", text: "49:36", media: null },
      { _id: "math_3_4", text: "7:6", media: null },
    ],
    questionInfo: {
      _id: "math_info_3",
      question: "math_3",
      option: "math_3_1",
      media: null,
      solution: "The ratio of areas of similar triangles is the square of the ratio of their corresponding sides. (1.2/1.4)^2 = (6/7)^2 = 36/49.",
    },
  },
  {
    _id: "math_4",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "math_sub_1", title: "Class 10 - Math" },
    examSubjectBook: { _id: "math_book_1", title: "NCERT Math" },
    examSubjectBookChapter: { _id: "math_chap_4", title: "Trigonometry" },
    text: "The value of sin 60° cos 30° + sin 30° cos 60° is:",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "math_4_1", text: "0", media: null },
      { _id: "math_4_2", text: "1", media: null },
      { _id: "math_4_3", text: "1/2", media: null },
      { _id: "math_4_4", text: "√3/2", media: null },
    ],
    questionInfo: {
      _id: "math_info_4",
      question: "math_4",
      option: "math_4_2",
      media: null,
      solution: "sin 60° cos 30° + sin 30° cos 60° = (√3/2)(√3/2) + (1/2)(1/2) = 3/4 + 1/4 = 1. (Alternatively, it is sin(60°+30°) = sin 90° = 1).",
    },
  },
  {
    _id: "math_5",
    exam: { _id: "66ab5807ffbb5019db72215a", seoTitle: "Class 10" },
    examSubject: { _id: "math_sub_1", title: "Class 10 - Math" },
    examSubjectBook: { _id: "math_book_1", title: "NCERT Math" },
    examSubjectBookChapter: { _id: "math_chap_5", title: "Statistics" },
    text: "The relationship between mean, median, and mode for a moderately skewed distribution is:",
    type: "MCQ_SA",
    media: null,
    optionOrdering: [
      { _id: "math_5_1", text: "Mode = 3 Median - 2 Mean", media: null },
      { _id: "math_5_2", text: "Mode = 2 Median - 3 Mean", media: null },
      { _id: "math_5_3", text: "Mode = 3 Median + 2 Mean", media: null },
      { _id: "math_5_4", text: "Mode = 2 Median + 3 Mean", media: null },
    ],
    questionInfo: {
      _id: "math_info_5",
      question: "math_5",
      option: "math_5_1",
      media: null,
      solution: "The empirical relationship is given by the formula: Mode = 3 Median - 2 Mean.",
    },
  },
];

export async function POST(req: Request) {
  try {
    const { subject, numberOfQuestions } = await req.json();

    let questionsToReturn = englishQuestions;
    let selectedSubject = { _id: "66ab5c44543b6f461d7a9cf4", title: "Class 10 - English" };

    if (subject === "Class 10 - Science") {
      questionsToReturn = scienceQuestions;
      selectedSubject = { _id: "sci_sub_1", title: "Class 10 - Science" };
    } else if (subject === "Class 10 - Math") {
      questionsToReturn = mathQuestions;
      selectedSubject = { _id: "math_sub_1", title: "Class 10 - Math" };
    }

    // Limit the number of questions based on numberOfQuestions, we'll repeat them if needed for mock purposes, 
    // but the user only asks up to 15, we only have 5, so we can duplicate to fill if necessary or just slice
    const num = numberOfQuestions || 5;
    let finalQuestions: any[] = [];
    while (finalQuestions.length < num) {
      finalQuestions = finalQuestions.concat(questionsToReturn);
    }
    finalQuestions = finalQuestions.slice(0, num).map((q, index) => ({
      ...q,
      _id: `${q._id}_dup_${index}`, // Give unique IDs to duplications to avoid react key issues
      questionInfo: {
        ...q.questionInfo,
        _id: `${q.questionInfo._id}_dup_${index}` // Also make sure nested IDs are somewhat unique
      }
    }));

    const mockData = {
      status: 200,
      success: true,
      error: null,
      message: "Quiz details fetched successfully for the given exam subject",
      data: {
        examSubject: selectedSubject,
        questions: finalQuestions,
      },
    };

    // Simulate network delay to make the UI look realistic
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json(mockData);
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to generate quiz", status: 500, message: "Internal server error" },
      { status: 500 }
    );
  }
}
