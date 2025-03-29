const exerciseParameters = {
  topics: [
    "daily life",
    "food and dining",
    "travel",
    "hobbies",
    "family",
    "work",
    "education",
    "culture",
    "technology",
    "entertainment",
    "nature",
    "shopping",
    "health",
    "sports",
  ] as const,

  levels: ["beginner", "intermediate", "advanced"] as const,

  contexts: [
    "at a restaurant",
    "in a school",
    "at work",
    "during travel",
    "at home",
    "in a store",
    "at a social event",
    "in nature",
    "at a sports venue",
  ] as const,
} as const;

const getRandomParameter = <T>(array: readonly T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const enhancePromptWithParams = (prompt: string) => {
  const randomTopic = getRandomParameter(exerciseParameters.topics);
  const randomLevel = getRandomParameter(exerciseParameters.levels);
  const randomContext = getRandomParameter(exerciseParameters.contexts);

  const enhancedPrompt = `
      ${prompt}
      
      Generate a completely unique exercise with these specific parameters:
      - Topic focus: ${randomTopic}
      - Difficulty level: ${randomLevel}
      - Situational context: ${randomContext}
      
      Ensure this exercise is different from any previous ones by:
      - Using unique vocabulary relevant to the topic and context
      - Creating fresh examples and scenarios
      - Adapting content to the specified difficulty level
      - Incorporating cultural elements specific to this context
    `;

  return enhancedPrompt;
};
