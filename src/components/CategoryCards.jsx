import { Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';

const cardStyles = {
  character: { background: 'linear-gradient(140deg, #fff1f5, #ffe9d4)' },
  environment: { background: 'linear-gradient(140deg, #eafff5, #daf2ff)' },
  shape: { background: 'linear-gradient(140deg, #eef2ff, #f0e8ff)' },
  action: { background: 'linear-gradient(140deg, #fff8d8, #ffe9f6)' }
};

export default function CategoryCards({ categories, onSelect }) {
  return (
    <Grid container spacing={1.5} aria-label="Prompt categories">
      {categories.map((category) => (
        <Grid key={category.kind} size={{ xs: 12, sm: 6, md: 3 }}>
          <Card elevation={0} sx={{ borderRadius: 3, ...cardStyles[category.kind], boxShadow: '0 6px 16px rgba(0,0,0,0.06)' }}>
            <CardActionArea onClick={() => onSelect(category.kind)} sx={{ borderRadius: 3, p: 0.5 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 0.5 }}>{category.title}</Typography>
                <Typography variant="body2" color="text.secondary">{category.subtitle}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
