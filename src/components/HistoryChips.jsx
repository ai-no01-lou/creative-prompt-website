import { Chip, Stack, Typography } from '@mui/material';

export default function HistoryChips({ history }) {
  return (
    <section className="history">
      <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>Recent prompts</Typography>
      <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
        {history.map((item) => (
          <Chip
            key={item}
            label={item}
            title={item}
            variant="outlined"
            sx={{
              borderColor: '#e4d9ff',
              borderRadius: '999px',
              maxWidth: '100%',
              '& .MuiChip-label': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }
            }}
          />
        ))}
      </Stack>
    </section>
  );
}
