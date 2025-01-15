import { z } from "zod";

export const RPExerciseSchema = z
  .object({
    mode: z.literal("RP").describe("Mode of the exercise, which is Role-Playing Scenario"),
    scenario: z.string().describe("Description of the scenario"),
    characterProfiles: z
      .array(
        z.object({
          name: z.string().describe("Name of the character"),
          role: z.string().describe("Role of the character in the scenario"),
          objectives: z.string().describe("The goals the character aims to achieve"),
        })
      )
      .describe("Character profiles involved in the scenario"),
    dialoguePrompts: z
      .array(
        z.object({
          character: z.string().describe("The character who is speaking the prompt"),
          prompt: z.string().describe("The prompt/question posed to the user"),
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
            .describe("Multiple choice question for the user"),
        })
      )
      .min(4)
      .max(5)
      .describe("Dialogue prompts with multiple choice questions, 4-5 questions in total"),
  })
  .describe("Schema for Role-Playing Scenario Exercise");

export const SCExerciseSchema = z
  .object({
    mode: z.literal("SC").describe("Mode of the exercise, which is Story Completion"),
    segments: z
      .array(
        z.object({
          narrative: z.string().describe("The narrative text or story segment"),
          requiredVocabulary: z
            .array(z.string())
            .describe("List of required vocabulary words to use in the segment"),
          decisionPoints: z
            .array(
              z.object({
                mcq: z
                  .object({
                    question: z.string().describe("MCQ question posed at a decision point"),
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
                  .describe("Multiple choice question for a decision point"),
              })
            )
            .min(4)
            .max(5)
            .describe("Decision points with multiple choice questions, 4-5 questions in total"),
        })
      )
      .describe("Story segments with narrative and decision points"),
  })
  .describe("Schema for Story Completion Exercise");

export const DCExerciseSchema = z
  .object({
    mode: z.literal("DC").describe("Mode of the exercise, which is Description Challenge"),
    descriptionObjective: z
      .string()
      .describe("Clear objective for the user to describe an object, scene, or concept"),
    targetGrammarPoint: z
      .string()
      .describe("Specific grammar aspect to practice in the description"),
    vocabularySuggestions: z
      .array(z.string())
      .describe("Suggested vocabulary words for the description"),
    exercises: z
      .array(
        z.object({
          instruction: z
            .string()
            .describe("Instructions or prompts for the user to complete the task"),
          example: z.string().describe("Example response to guide the user"),
        })
      )
      .describe("Descriptive exercises with instructions and examples"),
  })
  .describe("Schema for Description Challenge Exercise");

export type RPExercise = z.infer<typeof RPExerciseSchema>;
export type SCExercise = z.infer<typeof SCExerciseSchema>;
export type DCExercise = z.infer<typeof DCExerciseSchema>;

export const getExerciseSchema = (mode: string) => {
  switch (mode) {
    case "RP":
      return RPExerciseSchema;
    case "SC":
      return SCExerciseSchema;
    case "DC":
      return DCExerciseSchema;
    default:
      return z.object({});
  }
};
