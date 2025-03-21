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

export const fetchWritingReview = async (lang: string | null, content: string) => {
  const response = await fetch("/api/writing", {
    method: "POST",
    body: JSON.stringify({
      prompt: `Start AI writing review in ${lang} target language using the following content:\n ${content}`,
    }),
  });
  return await response.json();
};
