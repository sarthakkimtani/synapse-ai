export const fetchExercise = async (lang: string | null, mode: string) => {
  const response = await fetch("/api/exercise", {
    method: "POST",
    body: JSON.stringify({
      prompt: `Create Lesson in ${lang} language with ${mode} mode`,
      mode,
    }),
  });
  return await response.json();
};
