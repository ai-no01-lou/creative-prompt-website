import { CATEGORY_SPECS } from '../data/prompts.js';

const SLOT_REGEX = /{{\s*([\w]+)\s*}}/g;

const pickFromPool = (pool, rng = Math.random) => {
  if (!Array.isArray(pool) || pool.length === 0) return '';
  return pool[Math.floor(rng() * pool.length)];
};

export const composeFromSpec = (spec, rng = Math.random) => {
  if (!spec?.template || !spec?.pools) return '';

  const selections = Object.fromEntries(
    Object.entries(spec.pools).map(([slotName, pool]) => [slotName, pickFromPool(pool, rng)])
  );

  return spec.template.replace(SLOT_REGEX, (_, slotName) => selections[slotName] ?? '').replace(/\s+/g, ' ').trim();
};

export const generators = Object.fromEntries(
  Object.entries(CATEGORY_SPECS).map(([kind, spec]) => [kind, () => composeFromSpec(spec)])
);

export const generatePrompt = (kind) => generators[kind]?.() ?? '';

export const addToHistory = (history, text) => [text, ...history.filter((item) => item !== text)].slice(0, 6);
