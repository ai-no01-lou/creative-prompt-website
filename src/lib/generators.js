import { PROMPTS } from '../data/prompts';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generators = {
  character: () => `${pick(PROMPTS.moods)} + ${pick(PROMPTS.animals)} + ${pick(PROMPTS.jobs)}`,
  environment: () => `${pick(PROMPTS.environmentPlaces)} + ${pick(PROMPTS.environmentMoods)}`,
  shape: () => `${pick(PROMPTS.shapes)} + ${pick(PROMPTS.creatures)} + ${pick(PROMPTS.shapeStyles)}`,
  stealRemix: () => `${pick(PROMPTS.stealSources)} + ${pick(PROMPTS.remixStyles)}`
};

export const generatePrompt = (kind) => generators[kind]?.() ?? '';

export const addToHistory = (history, text) => [text, ...history.filter((item) => item !== text)].slice(0, 6);
