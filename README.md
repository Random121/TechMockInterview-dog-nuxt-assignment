# Dog Api Nuxt Homework

## Running as Development

```console
$ pnpm install
$ pnpm dev
```

## Issues Encountered

I encountered an issue with `vue-tsc` when I started the assessment and was unable
to build the app. Luckily, I found that downgrading the typescript version managed
to fix the error. I also managed to find an open [issue](https://github.com/vuejs/language-tools/issues/5018)
discussing this exact bug which also discusses downgrading as the best temporary workaround
for now.
