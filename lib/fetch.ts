export const fetchFlashcardExercise = async (lang: string | null) => {
  const response = await fetch("/api/flashcards", {
    method: "POST",
    body: JSON.stringify({
      prompt: `Create flashcard exercise in ${lang} target language`,
      lang,
    }),
  });
  return await response.json();
};
