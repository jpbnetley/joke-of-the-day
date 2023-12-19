[![CI](https://github.com/jpbnetley/joke-of-the-day/actions/workflows/main.yml/badge.svg)](https://github.com/jpbnetley/joke-of-the-day/actions/workflows/main.yml)

# Joke of the day

This app pulls a random joke from `reddit.com/r/jokes`

- [Reddit api](https://www.reddit.com/dev/api)

## Getting started
### Requirements
- [nodeJS](https://nodejs.org/en/download)
- [pnpm package manager](https://pnpm.io)
> Install pnpm globally
```bash
npm install -g pnpm
```

### Install dependencies

```bash
pnpm i
```

### Running the project
#### dev
```bash
pnpm run dev
```

#### Production

Build for production:
```bash
pnpm run build
```
Start production build
```bash
pnpm run start
```

## Deployed site:
- [Production](https://joke-of-the-day-prod.vercel.app)
- [Dev](https://joke-of-the-day-dev.vercel.app)

## [Additional resources](./RESOURCES.md)