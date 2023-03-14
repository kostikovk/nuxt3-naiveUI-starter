const isCi = process.env.CI !== undefined

// eslint-disable-next-line @typescript-eslint/no-var-requires
if (!isCi) require('husky').install()
