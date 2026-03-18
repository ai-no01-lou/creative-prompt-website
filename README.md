# Creative Prompt Website

## ELP-34 — React + MUI migration

This app was migrated from vanilla JS to Vite + React + MUI.

### Run locally

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

Build output is generated in `dist/` and served under `/creativeprompt/` base path.

## Rollout notes

1. Build app: `npm run build`
2. Ensure Docker compose mounts:
   - host: `/Users/loumini/.openclaw/workspace-foreman/creative-prompt-website/dist`
   - container: `/usr/share/nginx/html:ro`
3. Restart only the `creativeprompt` service.
4. Validate `https://sideprojects.thislou.com/creativeprompt` and hard refresh.

## Rollback notes

1. Revert this repo to pre-ELP-34 commit.
2. Rebuild if needed and restore old mount/source.
3. Restart only `creativeprompt` service.
4. Re-test URL and assets.
