import { Box, Container, Typography } from '@mui/material';
import { useState } from 'react';
import CategoryCards from './components/CategoryCards';
import HistoryChips from './components/HistoryChips';
import PromptPanel from './components/PromptPanel';
import { CATEGORIES } from './data/prompts';
import { addToHistory, generatePrompt } from './lib/generators';

const INITIAL_PROMPT = 'Click a category to generate a prompt!';

export default function App() {
  const [currentCategory, setCurrentCategory] = useState('character');
  const [prompt, setPrompt] = useState(INITIAL_PROMPT);
  const [history, setHistory] = useState([]);

  const generate = (kind) => {
    const text = generatePrompt(kind);
    setCurrentCategory(kind);
    setPrompt(text);
    setHistory((prev) => addToHistory(prev, text));
  };

  const handleShuffle = () => generate(currentCategory);

  const handleCopy = async () => {
    if (!prompt || prompt === INITIAL_PROMPT) return false;
    try {
      await navigator.clipboard.writeText(prompt);
      return true;
    } catch {
      return false;
    }
  };

  return (
    <Container maxWidth={false} disableGutters className="app-shell">
      <Box className="surface">
        <header style={{ textAlign: 'center' }}>
          <Typography variant="h3" sx={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', mb: 0.5 }}>
            Creative Prompt Generator
          </Typography>
        </header>

        <PromptPanel prompt={prompt} onShuffle={handleShuffle} onCopy={handleCopy} />
        <Box sx={{ mt: 2.25 }}>
          <CategoryCards categories={CATEGORIES} onSelect={generate} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <HistoryChips history={history} />
        </Box>
      </Box>
    </Container>
  );
}
