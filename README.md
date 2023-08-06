# Remotion Template

A template for crafting programmatic videos, tailored to personal preferences.

<img src="./docs/hello.gif">

## What's included

- [Remotion 4](https://github.com/remotion-dev/remotion)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/) configuration with lots of good rules based on [XO](https://github.com/xojs/xo)
- [Prettier](https://prettier.io/)
- [GitHub Actions](https://github.com/features/actions) for testing and rendering videos

## Where it's used

🔷 [Remotion Audio Visualizer](https://github.com/satelllte/remotion-audio-visualizer) - programmatic minimalistic audio visualizations.

## How to use this template

### 1. Create a new repository

Click on the **"Use this template"** button on the top of the page to create a new repository based on this template. Also you can download it as a ZIP or clone it.

### 2. After checking out your clone of the repository

Set the required Node.js version specified in `.nvmrc` file:

```sh
nvm use
```

Install dependencies:

```sh
npm ci
```

_(Optional, but recommended)_ Upgrade dependencies to the latest versions:

```sh
npm run upgrade
```

_(Optional, but recommended)_ Reset the version of your clone to the initial `0.1.0` version:

```sh
npm version 0.1.0
```

Lastly, you can update your new project name / details in `package.json`, `README.md`, `LICENSE`, etc.

And finally run the local development of it:

```sh
npm run dev
```

### 3. Enjoy!

Start making your video 🎥

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
