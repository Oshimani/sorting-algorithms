export const ANIMATION_DURATION = 100;
export const ITEM_MAX_HEIGHT = 150;
export const NUMBER_OF_ITEMS = 30;

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const generateItems = (n: number = 100) =>
  Array.from({ length: n }, (_, i) => i + 1).map(() => ({
    value: Math.round(Math.random() * 100),
    id: crypto.randomUUID(),
  }));
