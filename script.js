// === DATA ===

const data = {
    character: {
        animals: [
            'frog', 'fox', 'cat', 'dog', 'rabbit', 'wolf', 'bear', 'owl',
            'deer', 'penguin', 'tiger', 'elephant', 'shark', 'octopus', 'parrot',
            'hamster', 'raccoon', 'dragon', 'phoenix', 'unicorn', 'hedgehog', 'otter',
            'koala', 'crow', 'snail', 'chameleon', 'bat', 'axolotl', 'capybara',
            'panda', 'lynx', 'manta ray', 'firefly', 'narwhal', 'pangolin'
        ],
        jobs: [
            'knight', 'librarian', 'wizard', 'chef', 'detective', 'pirate',
            'astronaut', 'botanist', 'blacksmith', 'healer', 'inventor', 'merchant',
            'bard', 'assassin', 'monk', 'engineer', 'architect', 'explorer',
            'alchemist', 'teacher', 'painter', 'musician', 'dancer', 'spy',
            'sailor', 'farmer', 'sculptor', 'tailor', 'scribe', 'guardian',
            'cartographer', 'apothecary', 'oracle', 'gladiator', 'sommelier'
        ],
        moods: [
            'angry', 'sleepy', 'arrogant', 'nervous', 'cheerful', 'melancholic',
            'curious', 'grumpy', 'shy', 'brave', 'dramatic', 'sarcastic',
            'confused', 'determined', 'clumsy', 'mysterious', 'energetic', 'tired',
            'hopeful', 'suspicious', 'smug', 'lonely', 'excited', 'calm',
            'frustrated', 'jolly', 'anxious', 'fierce', 'gentle', 'mischievous',
            'bewildered', 'stoic', 'whimsical', 'exasperated', 'lovesick'
        ]
    },

    environment: [
        'a tiny shop in a tree',
        'underground mushroom village',
        'floating island farm',
        'abandoned robot factory',
        'underwater tea house',
        'cloud city at sunset',
        'ancient library in a volcano',
        'crystal cave market',
        'rooftop garden greenhouse',
        'haunted carnival at midnight',
        'sky whale graveyard',
        'lighthouse on an asteroid',
        'frozen clocktower town',
        'neon jungle temple',
        'desert oasis library',
        'canyon full of hanging lanterns',
        'sunken cathedral',
        'enchanted train station',
        'moon crater village',
        'deep sea post office',
        'forest made of glass',
        'snowy mountaintop shrine',
        'volcanic beach city',
        'windmill plains at dawn',
        'cathedral of stars',
        'clockwork city in the clouds',
        'coral reef marketplace',
        'forgotten palace under a waterfall',
        'thunderstorm lighthouse',
        'living forest where the trees walk'
    ],

    shape: {
        shapes: [
            'circle', 'triangle', 'square', 'star', 'crescent', 'spiral',
            'hexagon', 'diamond', 'teardrop', 'wave', 'blob', 'arrow',
            'cross', 'zigzag', 'cloud', 'oval', 'boomerang', 'polygon'
        ],
        creatures: [
            'dragon', 'robot', 'fairy', 'monster', 'alien', 'golem',
            'phoenix', 'mermaid', 'centaur', 'chimera', 'spirit', 'slime creature',
            'mechanical beast', 'ancient deity', 'shadow beast', 'sky titan',
            'crystal elemental', 'deep sea leviathan', 'forest guardian', 'storm wraith'
        ]
    },

    action: [
        'leaping off a crumbling building',
        'dancing in the rain',
        'arguing with a ghost',
        'falling asleep mid-battle',
        'discovering a hidden door',
        'painting a wall at night',
        'racing through a marketplace',
        'hiding under a table',
        'reading a forbidden scroll',
        'cooking over a campfire',
        'dueling at dawn',
        'catching falling stars',
        'planting a flag on a mountain',
        'surfing on a cloud',
        'fighting a giant fish',
        'whispering to a sleeping dragon',
        'knitting during a storm',
        'chasing their own shadow',
        'juggling while riding a bicycle',
        'building a sandcastle on the moon',
        'teaching a monster to read',
        'riding a giant snail to battle',
        'escaping from a library through the window',
        'arguing with a vending machine',
        'conducting an orchestra of frogs'
    ]
};

// === HELPERS ===

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generatePrompt(category) {
    switch (category) {
        case 'character': {
            const animal = pick(data.character.animals);
            const job = pick(data.character.jobs);
            const mood = pick(data.character.moods);
            return `${mood} ${animal} ${job}`;
        }
        case 'environment':
            return pick(data.environment);
        case 'shape': {
            const shape = pick(data.shape.shapes);
            const creature = pick(data.shape.creatures);
            return `turn a ${shape} into a ${creature}`;
        }
        case 'action':
            return pick(data.action);
        default:
            return 'Click a category!';
    }
}

// === DOM ===

const promptDisplay = document.getElementById('prompt-display');
const copyBtn = document.getElementById('copy-btn');
const blocks = document.querySelectorAll('.category-block');

async function setPrompt(text) {
    // Fade out
    promptDisplay.classList.add('fade-out');
    await new Promise(r => setTimeout(r, 220));

    // Update text
    promptDisplay.textContent = text;

    // Fade in
    promptDisplay.classList.remove('fade-out');
    promptDisplay.classList.add('fade-in');

    // Show copy button
    copyBtn.classList.remove('hidden');
    copyBtn.classList.remove('copied');
    copyBtn.textContent = '📋 Copy';
}

blocks.forEach(block => {
    block.addEventListener('click', () => {
        const category = block.dataset.category;
        const prompt = generatePrompt(category);

        // Active flash
        block.classList.add('active');
        setTimeout(() => block.classList.remove('active'), 200);

        setPrompt(prompt);
    });
});

copyBtn.addEventListener('click', () => {
    const text = promptDisplay.textContent;
    navigator.clipboard.writeText(text).then(() => {
        copyBtn.textContent = '✅ Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.textContent = '📋 Copy';
            copyBtn.classList.remove('copied');
        }, 2000);
    });
});
