import { useState, useEffect, useCallback } from "react";

export function usePhraseAnimation(phrases: string[], intervalDuration = 2000) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Use useCallback to memoize the interval function
  const rotatePhrase = useCallback(() => {
    setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
  }, [phrases.length]);

  useEffect(() => {
    // Reduce initial loading time
    const initialTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 50); // Reduced from 100ms to 50ms

    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    const interval = setInterval(rotatePhrase, intervalDuration);

    return () => clearInterval(interval);
  }, [rotatePhrase, intervalDuration, isLoading]);

  return { currentPhrase: phrases[currentPhraseIndex], isLoading };
}
