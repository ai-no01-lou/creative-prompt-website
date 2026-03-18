export const CATEGORY_SPECS = {
  character: {
    kind: 'character',
    title: '🐾 Character',
    subtitle: '[Mood] + [Animal] + [Role]',
    template: '{{mood}} {{animal}} {{role}}',
    pools: {
      mood: [
        'angry', 'sleepy', 'arrogant', 'nervous', 'cheerful', 'melancholic', 'curious', 'grumpy',
        'shy', 'brave', 'dramatic', 'sarcastic', 'confused', 'determined', 'clumsy', 'mysterious',
        'energetic', 'tired', 'hopeful', 'suspicious', 'smug', 'lonely', 'excited', 'calm',
        'frustrated', 'jolly', 'anxious', 'fierce', 'gentle', 'mischievous'
      ],
      animal: [
        'frog', 'fox', 'cat', 'dog', 'rabbit', 'wolf', 'bear', 'owl', 'deer', 'penguin',
        'tiger', 'elephant', 'shark', 'octopus', 'parrot', 'hamster', 'raccoon', 'dragon',
        'phoenix', 'unicorn', 'hedgehog', 'otter', 'koala', 'crow', 'snail', 'chameleon',
        'bat', 'axolotl', 'capybara', 'panda'
      ],
      role: [
        'knight', 'librarian', 'wizard', 'chef', 'detective', 'pirate', 'astronaut', 'botanist',
        'blacksmith', 'healer', 'inventor', 'merchant', 'bard', 'assassin', 'monk', 'engineer',
        'architect', 'explorer', 'alchemist', 'teacher', 'painter', 'musician', 'dancer', 'spy',
        'sailor', 'farmer', 'sculptor', 'tailor', 'scribe', 'guardian'
      ]
    }
  },
  environment: {
    kind: 'environment',
    title: '🌿 Environment',
    subtitle: '[Place] + [Atmosphere]',
    template: 'Design {{place}} {{atmosphere}}.',
    pools: {
      place: [
        'treehouse workshop', 'underground mushroom village', 'floating island farm', 'abandoned robot factory',
        'underwater tea house', 'cloud city', 'volcanic library', 'crystal cave market',
        'rooftop greenhouse', 'haunted carnival', 'sky whale graveyard', 'asteroid lighthouse',
        'frozen clocktower town', 'neon jungle temple', 'desert oasis archive', 'lantern canyon',
        'sunken cathedral', 'enchanted train station', 'moon crater village', 'deep-sea post office'
      ],
      atmosphere: [
        'at sunrise', 'during a thunderstorm', 'covered in glowing moss', 'mid-renovation',
        'just after a festival', 'during golden hour', 'with no gravity', 'in total silence',
        'inside a dream sequence', 'with floating lanterns', 'under a meteor shower', 'during a power outage',
        'as winter begins', 'with giant flowers in bloom', 'while time is frozen', 'full of tiny robots',
        'during a magical blackout', 'as mist rolls in', 'lit only by candles', 'right before dawn'
      ]
    }
  },
  shape: {
    kind: 'shape',
    title: '🔷 Shape → Creature',
    subtitle: '[Shape] + [Creature] + [Style]',
    template: 'Turn a {{shape}} into a {{creature}} {{style}}.',
    pools: {
      shape: ['circle', 'triangle', 'square', 'star', 'crescent', 'spiral', 'hexagon', 'diamond', 'teardrop', 'wave', 'blob', 'arrow', 'cross', 'zigzag', 'cloud'],
      creature: ['dragon', 'robot', 'fairy', 'monster', 'alien', 'golem', 'phoenix', 'mermaid', 'centaur', 'chimera', 'spirit', 'slime creature', 'mechanical beast', 'ancient deity'],
      style: [
        'with paper-cut layers', 'as a stained-glass design', 'made of found objects', 'as a street-art mural',
        'with cozy storybook vibes', 'as a futuristic blueprint', 'in a bold comic style', 'with watercolor textures',
        'as an ancient relic', 'with plush toy proportions', 'as a low-poly model', 'in a gothic silhouette'
      ]
    }
  },
  stealRemix: {
    kind: 'stealRemix',
    title: '🧪 Steal & Remix',
    subtitle: '[Steal Source] + [Remix Style]',
    template: 'Steal {{stealSource}} and remix it {{remixStyle}}.',
    pools: {
      stealSource: [
        'the silhouette language of samurai cinema', 'the color blocking of retro travel posters',
        'the atmosphere of rainy noir photography', 'the composition rhythm of manga splash pages',
        'the mood of impressionist plein-air painting', 'the attitude of 90s skate zines',
        'the shape grammar of Art Deco posters', 'the warmth of children’s book illustrations',
        'the visual density of baroque paintings', 'the staging of classic Broadway musicals',
        'the framing of documentary street photography', 'the texture language of stop-motion sets',
        'the simplicity of Scandinavian toy design', 'the dramatic lighting of Renaissance portraits',
        'the iconography of vintage tarot cards'
      ],
      remixStyle: [
        'with neon cyberpunk lighting', 'as a cozy pastel scene', 'in maximalist collage style',
        'as minimalist monochrome linework', 'with brutalist geometric forms', 'as dreamy surrealism',
        'in playful claymation aesthetics', 'as high-fashion editorial art', 'with glitch-art distortions',
        'as hand-inked fantasy concept art', 'in low-fi risograph print style', 'as whimsical folk art',
        'with ultra-clean UI illustration vibes', 'as cinematic epic matte painting', 'in pixel-art retro game style'
      ]
    }
  }
};

export const CATEGORIES = [
  CATEGORY_SPECS.character,
  CATEGORY_SPECS.environment,
  CATEGORY_SPECS.shape,
  CATEGORY_SPECS.stealRemix
].map(({ kind, title, subtitle }) => ({ kind, title, subtitle }));
