export const fetchExercise = async (lang: string | null, mode: string) => {
  const response = await fetch("/api/exercise", {
    method: "POST",
    body: JSON.stringify({
      prompt: `Create language learning exercise in ${lang} target language with ${mode} mode`,
      mode,
      lang,
    }),
  });
  return await response.json();
};
