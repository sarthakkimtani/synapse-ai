/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from "zod";

export const FCExerciseSchema = z
  .object({
    flashcards: z
      .array(
        z.object({
          term: z.string().describe("The vocabulary word or phrase in target language"),
          definition: z.string().describe("The definition of the term in target language"),
          exampleSentence: z
            .string()
            .optional()
            .describe("An example sentence using the term in context in target language"),
          options: z
            .array(z.string())
            .length(4)
            .describe(
              "The options for the multiple-choice question in English (exactly 4 choices)"
            ),
          correctAnswer: z.string().describe("The correct answer among the English options"),
        })
      )
      .min(10)
      .describe("An array of vocabulary flashcards, requiring at least 10"),
  })
  .describe("Schema for Vocabulary Flashcard-based Multiple Choice Question Exercise");

export const SafeFCExerciseSchema = FCExerciseSchema.transform((data) => {
  return {
    flashcards: data.flashcards.map(({ correctAnswer, ...rest }) => rest),
  };
});

export type FCExercise = z.infer<typeof FCExerciseSchema>;
export type SafeFCExercise = z.infer<typeof SafeFCExerciseSchema>;

export const getExerciseSchema = (mode: string) => {
  if (mode === "FC") return FCExerciseSchema;
  throw new Error("Invalid Mode.");
};
