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
            .describe("The message content; optional for system or question-based messages"),
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
