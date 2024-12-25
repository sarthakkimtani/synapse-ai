import { useState, useEffect } from "react";

export function usePhraseAnimation(phrases: string[], intervalDuration = 2000) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [phrases, intervalDuration, isLoading]);

  return { currentPhrase: phrases[currentPhraseIndex], isLoading };
}
