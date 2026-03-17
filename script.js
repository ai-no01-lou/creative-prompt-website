
const prompts = {
    characters: [
        "A grumpy wizard who lost his spellbook in a laundry mat.",
        "A shy astronaut whose best friend is a talking plant.",
        "A knight who is afraid of horses but excellent at knitting.",
        "A detective who can only solve cases involving missing socks."
    ],
    environments: [
        "A sunken city where bioluminescent creatures glow in ancient ruins.",
        "A forest made entirely of gigantic, living crystals.",
        "A bustling market street on a cloud nine where vendors sell dreams.",
        "A tiny, cozy cottage nestled inside a massive, hollowed-out tree."
    ],
    objects: [
        "A magical compass that points to your greatest desire.",
        "A teacup that shows you glimpses of the future when you drink from it.",
        "A paintbrush that brings to life whatever it draws.",
        "A clock that can slow down or speed up time for a few seconds."
    ],
    actions: [
        "A character discovering a hidden message in a very old book.",
        "Two unlikely companions racing against time to catch a runaway hot air balloon.",
        "Someone attempting to teach a dragon how to play fetch.",
        "A group of friends trying to bake a cake using only unconventional ingredients."
    ]
};

const promptDisplay = document.getElementById('prompt-display');
const categoryBlocks = document.querySelectorAll('.category-block');

categoryBlocks.forEach(block => {
    block.addEventListener('click', () => {
        const category = block.dataset.category;
        const categoryPrompts = prompts[category];
        const randomIndex = Math.floor(Math.random() * categoryPrompts.length);
        promptDisplay.textContent = categoryPrompts[randomIndex];
    });
});
