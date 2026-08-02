[FF8 Repo](https://tools.ff8.wiki)

## Development

Vite + React + Mantine. Shared theme, header and app shell come from
[@ff8-speedruns/ui](https://github.com/ff8-speedruns/ff8-ui), installed straight
from git — there is no npm registry involved.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run lint
```

Pushing to `main` builds and deploys to the `gh-pages` branch automatically.

To try a change to the shared UI before tagging it, point this repo at your
working copy with `npm install ../ff8-ui`, and put the `github:` line in
`package.json` back before committing.
