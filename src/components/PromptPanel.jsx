import { Box, Button, Snackbar, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export default function PromptPanel({ prompt, onShuffle, onCopy }) {
  const [toast, setToast] = useState({ open: false, message: '' });

  const handleCopy = async () => {
    const success = await onCopy();
    setToast({ open: true, message: success ? 'Copied!' : 'Copy failed' });
  };

  return (
    <Box className="prompt-box">
      <Typography className="prompt-text" variant="h5">{prompt}</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mt: 1.5 }}>
        <Button variant="contained" onClick={onShuffle} sx={{ borderRadius: 999 }}>✨ Shuffle current</Button>
        <Button variant="outlined" onClick={handleCopy} sx={{ borderRadius: 999 }}>📋 Copy</Button>
      </Stack>
      <Snackbar
        open={toast.open}
        autoHideDuration={1200}
        onClose={() => setToast({ open: false, message: '' })}
        message={toast.message}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
