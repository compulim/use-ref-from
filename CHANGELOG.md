# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Added type-checking for test, by [@compulim](https://github.com/compulim), in PR [#22](https://github.com/compulim/use-ref-from/pull/22)
- Updates `tsconfig.json` to extend from [`@tsconfig/strictest`](https://npmjs.com/package/@tsconfig/strictest), by [@compulim](https://github.com/compulim), in PR [#21](https://github.com/compulim/use-ref-from/pull/21) and PR [#23](https://github.com/compulim/use-ref-from/pull/23)
- Bumped dependencies, by [@compulim](https://github.com/compulim), in PR [#21](https://github.com/compulim/use-ref-from/pull/21), [#32](https://github.com/compulim/use-ref-from/pull/32), [#33](https://github.com/compulim/use-ref-from/pull/33), and [#39](https://github.com/compulim/use-ref-from/pull/39)
   - Production dependencies
      - [`@babel/runtime-corejs3@7.23.1`](https://npmjs.com/package/@babel/runtime-corejs3)
   - Development dependencies
      - [`@babel/cli@7.23.0`](https://npmjs.com/package/@babel/cli)
      - [`@babel/core@7.23.0`](https://npmjs.com/package/@babel/core)
      - [`@babel/plugin-transform-runtime@7.22.15`](https://npmjs.com/package/@babel/plugin-transform-runtime)
      - [`@babel/preset-env@7.22.20`](https://npmjs.com/package/@babel/preset-env)
      - [`@babel/preset-typescript@7.23.0`](https://npmjs.com/package/@babel/preset-typescript)
      - [`@testing-library/react@14.0.0`](https://npmjs.com/package/@testing-library/react)
      - [`@tsconfig/recommended@1.0.3`](https://npmjs.com/package/@tsconfig/recommended)
      - [`@types/jest@29.5.5`](https://npmjs.com/package/@types/jest)
      - [`@types/react-dom@18.2.7`](https://npmjs.com/package/@types/react-dom)
      - [`@types/react@18.2.25`](https://npmjs.com/package/@types/react)
      - [`@typescript-eslint/eslint-plugin@6.7.4`](https://npmjs.com/package/@typescript-eslint/eslint-plugin)
      - [`@typescript-eslint/parser@6.7.4`](https://npmjs.com/package/@typescript-eslint/parser)
      - [`esbuild@0.19.2`](https://npmjs.com/package/esbuild)
      - [`eslint-plugin-react@7.33.2`](https://npmjs.com/package/eslint-plugin-react)
      - [`eslint@8.51.0`](https://npmjs.com/package/eslint)
      - [`jest-environment-jsdom@29.7.0`](https://npmjs.com/package/jest-environment-jsdom)
      - [`jest@29.7.0`](https://npmjs.com/package/jest)
      - [`prettier@3.0.3`](https://npmjs.com/package/prettier)
      - [`react-dom@18.2.0`](https://npmjs.com/package/react-dom)
      - [`react-test-renderer@18.2.0`](https://npmjs.com/package/react-test-renderer)
      - [`react@18.2.0`](https://npmjs.com/package/react)
      - [`typescript@5.2.2`](https://npmjs.com/package/typescript)

### Fixed

- Fixes [#19](https://github.com/compulim/use-ref-from/issues/19). Updated `exports` field to workaround [TypeScript resolution bug](https://github.com/microsoft/TypeScript/issues/50762), by [@compulim](https://github.com/compulim), in PR [#20](https://github.com/compulim/use-ref-from/pull/20)

## [0.0.2] - 2023-03-21

### Fixed

- Fixes [#9](https://github.com/compulim/use-ref-from/issues/9). Add typings for conditional exports, by [@compulim](https://github.com/compulim), in PR [#10](https://github.com/compulim/use-ref-from/pull/10)

### Changed

- Bump dependencies, by [@compulim](https://github.com/compulim), in PR [#8](https://github.com/compulim/use-ref-from-pull/8)
   - Production dependencies
      - [`@babel/runtime-corejs3@7.21.0`](https://npmjs.com/package/@babel/runtime-corejs3)
   - Development dependencies
      - [`@babel/cli@7.21.0`](https://npmjs.com/package/@babel/cli)
      - [`@babel/core@7.21.0`](https://npmjs.com/package/@babel/core)
      - [`@babel/plugin-transform-runtime@7.21.0`](https://npmjs.com/package/@babel/plugin-transform-runtime)
      - [`@babel/preset-typescript@7.21.0`](https://npmjs.com/package/@babel/preset-typescript)
      - [`@types/react@17.0.53`](https://npmjs.com/package/@types/react)
      - [`@typescript-eslint/eslint-plugin@5.53.0`](https://npmjs.com/package/@typescript-eslint/eslint-plugin)
      - [`@typescript-eslint/parser@5.53.0`](https://npmjs.com/package/@typescript-eslint/parser)
      - [`eslint-plugin-react@7.32.2`](https://npmjs.com/package/eslint-plugin-react)
      - [`eslint@8.34.0`](https://npmjs.com/package/eslint)
      - [`jest-environment-jsdom@29.4.3`](https://npmjs.com/package/jest-environment-jsdom)
      - [`jest@29.4.3`](https://npmjs.com/package/jest)
      - [`prettier@2.8.4`](https://npmjs.com/package/prettier)
      - [`typescript@4.9.5`](https://npmjs.com/package/typescript)

## [0.0.1] - 2023-01-03

### Added

- First public release
