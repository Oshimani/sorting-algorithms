export const ANIMATION_DURATION = 100;

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateItems = (n: number = 100) => {
  const array = Array.from({ length: n }, (_, i) => i + 1);

  // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }

  return array.map((value) => ({ value, id: crypto.randomUUID() }));
};
