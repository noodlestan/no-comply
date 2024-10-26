# Mr. Green studio App

This is Mr Green studio app.

It's built with

- [Solid JS](https://www.solidjs.com/)
- [Vite](https://vitejs.dev/)
- [three.js](https://threejs.org/)
- [cannon.js](https://schteppe.github.io/cannon.js/)

## Features

### Technical

## Development

Read first: [Mr Green README](../../../../README.md)

### Building

**Production build**

```
npm run build
npm run serve
```

**Development mode**

```
npm run dev
```

## Troubleshooting

### Build failures

Make sure you are running the prescribed [node version](../../.nvmrc)

If the build fails with `@mistergreen/shared` errors, you might have pulled changes: rebuild `packages/shared`. **Note:** run that shared build in watch mode if you are actively changing those types. See [shared/README.md](../../../shared/README.md) for details.

### Dev server fails to start

Check http://localhost:3000 for health

Is another instance running on same port? Stop it, or use a different port. See [env](../../../../.env.example) for how.

## License

Copyright (c) 2023 [Andre Torgal](https://andretorgal.com/).

Published under a [MIT License](https://andrezero.mit-license.org/2023).
