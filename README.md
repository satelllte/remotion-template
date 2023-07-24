# Remotion Template

A template for crafting programmatic videos, tailored to personal preferences.

<img src="./docs/hello.gif">

## What's included

- [Remotion 4](https://github.com/remotion-dev/remotion)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) configuration with lots of good rules based on [XO](https://github.com/xojs/xo)
- [GitHub Actions](https://github.com/features/actions) for testing and rendering videos

## Where it's used

🔷 [Remotion Audio Visualizer](https://github.com/satelllte/remotion-audio-visualizer) - programmatic minimalistic audio visualizations.

## Development

**Install dependencies**

```sh
nvm use
npm ci
```

**Start video preview in development**

```sh
npm run dev
```

**Render video**

```sh
# Available video ID's can be found in src/Root.tsx file
npm run render:mp4 --video=ID
npm run render:gif --video=ID
```

**Test**

```sh
npm run test:lint
npm run test:types
```

**Upgrade dependencies**

```sh
npm run upgrade
```
