import { z } from "zod";

export const RPExerciseSchema = z
  .object({
    mode: z
      .literal("RP")
      .describe("Mode of the exercise, which is a Chat-based Role-Playing Scenario"),
    roleDescription: z
      .string()
      .describe("Description of the role the user will assume in the scenario"),
    initialPrompt: z
      .string()
      .describe("The initial message that sets the stage for the chat-based role-playing scenario"),
    conversation: z
      .array(
        z.object({
          speaker: z
            .union([z.literal("system"), z.literal("character"), z.literal("user")])
            .describe(
              'Role of the speaker in the message; should be one of "system" or "character" or "user"'
            ),
          message: z
            .string()
            .optional()
            .describe(
              "The message content in target language; optional for system or question-based messages"
            ),
          mcq: z
            .object({
              question: z.string().describe("MCQ question posed to the user"),
              options: z
                .array(z.string())
                .length(4)
                .describe("The options to choose from (exactly 4 options)"),
              correctAnswer: z.string().describe("The correct answer among the options"),
              feedback: z
                .object({
                  correct: z.string().describe("Feedback when the answer is correct"),
                  incorrect: z.string().describe("Feedback when the answer is incorrect"),
                })
                .describe("Feedback for the answer choice"),
            })
            .optional()
            .describe("Multiple choice question interleaved in the conversation"),
        })
      )
      .min(5)
      .max(10)
      .describe(
        "Chat-based conversation, including system, character messages, and interleaved MCQs"
      ),
  })
  .describe("Schema for Chat-based Role-Playing Scenario Exercise");

export const FCExerciseSchema = z
  .object({
    mode: z
      .literal("FC")
      .describe(
        'Mode of the exercise, which is "FC" for Flashcard-based Multiple Choice Questions'
      ),
    flashcards: z
      .array(
        z.object({
          term: z.string().describe("The vocabulary word or phrase to learn in target language"),
          definition: z.string().describe("The correct definition of the term in target language"),
          exampleSentence: z
            .string()
            .optional()
            .describe("An example sentence using the term in context in target language"),
          options: z
            .array(z.string())
            .length(4)
            .describe(
              "The options for the multiple-choice question, exactly 4 choices in English language"
            ),
          correctAnswer: z.string().describe("The correct answer among the options"),
        })
      )
      .min(10)
      .describe("An array of vocabulary flashcards, requiring at least 10"),
  })
  .describe("Schema for Vocabulary Flashcard-based Multiple Choice Question Exercise");

export type RPExercise = z.infer<typeof RPExerciseSchema>;
export type FCExercise = z.infer<typeof FCExerciseSchema>;

export const getExerciseSchema = (mode: string) => {
  if (mode === "RP") return RPExerciseSchema;
  else if (mode === "FC") return FCExerciseSchema;
  else return z.object({});
};
