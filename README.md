# Remotion Template

A template for crafting programmatic videos, tailored to personal preferences.

## What's included

- [Remotion 4](https://github.com/remotion-dev/remotion)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) configuration with lots of good rules based on [XO](https://github.com/xojs/xo)

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
