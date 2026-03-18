import { PROMPTS } from '../data/prompts';

const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const generators = {
  character: () => `${pick(PROMPTS.moods)} ${pick(PROMPTS.animals)} ${pick(PROMPTS.jobs)}`,
  environment: () => pick(PROMPTS.environments),
  shape: () => `Turn a ${pick(PROMPTS.shapes)} into a ${pick(PROMPTS.creatures)}.`,
  action: () => `Draw a scene of someone ${pick(PROMPTS.actions)}.`
};

export const generatePrompt = (kind) => generators[kind]?.() ?? '';

export const addToHistory = (history, text) => [text, ...history.filter((item) => item !== text)].slice(0, 6);
