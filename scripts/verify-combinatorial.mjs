import assert from 'node:assert/strict';
import { CATEGORY_SPECS } from '../src/data/prompts.js';
import { composeFromSpec } from '../src/lib/generators.js';

const slotNamesFromTemplate = (template) => [...template.matchAll(/{{\s*([\w]+)\s*}}/g)].map((m) => m[1]);

const run = () => {
  for (const [kind, spec] of Object.entries(CATEGORY_SPECS)) {
    const slots = slotNamesFromTemplate(spec.template);
    assert.ok(slots.length >= 2, `${kind} should have at least 2 combinatorial slots`);

    // Every slot placeholder must have a backing pool.
    for (const slot of slots) {
      assert.ok(Array.isArray(spec.pools[slot]), `${kind}.${slot} pool missing`);
      assert.ok(spec.pools[slot].length > 0, `${kind}.${slot} pool cannot be empty`);
    }

    // Composing should consume exactly one random pick per slot.
    let calls = 0;
    const countingRng = () => {
      calls += 1;
      return 0;
    };
    const prompt = composeFromSpec(spec, countingRng);
    assert.equal(calls, slots.length, `${kind} should reroll all slots on each generation`);
    assert.ok(prompt && !prompt.includes('{{'), `${kind} should resolve all placeholders`);
  }

  // Deterministic combinatorial check for Steal & Remix.
  const stealSpec = CATEGORY_SPECS.stealRemix;
  const rngValues = [0, 0.9]; // first steal source + last-ish remix style
  let index = 0;
  const deterministicRng = () => rngValues[index++] ?? 0;
  const prompt = composeFromSpec(stealSpec, deterministicRng);

  const match = prompt.match(/^Steal (.+) and remix it (.+)\.$/);
  assert.ok(match, 'stealRemix prompt must keep "Steal X and remix it Y." format');

  const [, stealSource, remixStyle] = match;
  assert.ok(stealSpec.pools.stealSource.includes(stealSource), 'stealRemix must use one stealSource');
  assert.ok(stealSpec.pools.remixStyle.includes(remixStyle), 'stealRemix must use one remixStyle');

  console.log('✅ combinatorial verification passed');
};

run();
