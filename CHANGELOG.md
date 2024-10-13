# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Removed

- 💢 Removed named exports, please import the defaults instead
   - Use `import { useRefFrom } from 'use-ref-from'` instead

### Changed

- 💢 Moved build tools from Babel to tsup/esbuild
- Bumped dependencies, in PR [#55](https://github.com/compulim/use-ref-from/pull/55), and [#59](https://github.com/compulim/use-ref-from/pull/59)
   - Development dependencies
      - [`@babel/core@7.24.6`](https://npmjs.com/package/@babel/core/v/7.24.6)
      - [`@babel/preset-env@7.24.7`](https://npmjs.com/package/@babel/preset-env/v/7.24.7)
      - [`@babel/preset-react@7.24.7`](https://npmjs.com/package/@babel/preset-react/v/7.24.7)
      - [`@babel/preset-typescript@7.24.7`](https://npmjs.com/package/@babel/preset-typescript/v/7.24.7)
      - [`@testing-library/react@16.0.0`](https://npmjs.com/package/@testing-library/react/v/16.0.0)
      - [`@tsconfig/recommended@1.0.6`](https://npmjs.com/package/@tsconfig/recommended/v/1.0.6)
      - [`@tsconfig/strictest@2.0.5`](https://npmjs.com/package/@tsconfig/strictest/v/2.0.5)
      - [`@types/react@18.3.3`](https://npmjs.com/package/@types/react/v/18.3.3)
      - [`@types/react-dom@18.3.0`](https://npmjs.com/package/@types/react-dom/v/18.3.0)
      - [`@typescript-eslint/eslint-plugin@7.14.1`](https://npmjs.com/package/@typescript-eslint/eslint-plugin/v/7.14.1)
      - [`@typescript-eslint/parser@7.14.1`](https://npmjs.com/package/@typescript-eslint/parser/v/7.14.1)
      - [`esbuild@0.21.5`](https://npmjs.com/package/esbuild/v/0.21.5)
      - [`eslint-plugin-react@7.34.3`](https://npmjs.com/package/eslint-plugin-react/v/7.34.3)
      - [`prettier@3.3.2`](https://npmjs.com/package/prettier/v/3.3.2)
      - [`react@18.3.1`](https://npmjs.com/package/react/v/18.3.1)
      - [`react-dom@18.3.1`](https://npmjs.com/package/react-dom/v/18.3.1)
      - [`react-test-renderer@18.3.1`](https://npmjs.com/package/react-test-renderer/v/18.3.1)
      - [`tsup@8.1.0`](https://npmjs.com/package/tsup/v/8.1.0)
      - [`typescript@5.5.2`](https://npmjs.com/package/typescript/v/5.5.2)
- Added ESLint import/export syntax, in PR [#60](https://github.com/compulim/use-ref-from/pull/60)
- Added [`publint`](https://npmjs.com/package/publint), in PR [#60](https://github.com/compulim/use-ref-from/pull/60)

## [0.1.0] - 2024-04-01

### Changed

- Relaxed peer dependencies requirements to `react@>=16.8.0`, by [@compulim](https://github.com/compulim) in PR [#47](https://github.com/compulim/use-ref-from/pull/47)
- Bumped dependencies, by [@compulim](https://github.com/compulim), in PR [#43](https://github.com/compulim/use-ref-from/pull/43) and [#45](https://github.com/compulim/use-ref-from/pull/45)
   - Production dependencies
      - [`@babel/runtime-corejs3@7.24.1`](https://npmjs.com/package/@babel/runtime-corejs3)
   - Development dependencies
      - [`@babel/cli@7.24.1`](https://npmjs.com/package/@babel/cli)
      - [`@babel/core@7.24.3`](https://npmjs.com/package/@babel/core)
      - [`@babel/plugin-transform-runtime@7.24.3`](https://npmjs.com/package/@babel/plugin-transform-runtime)
      - [`@babel/preset-env@7.24.3`](https://npmjs.com/package/@babel/preset-env)
      - [`@babel/preset-react@7.24.1`](https://npmjs.com/package/@babel/preset-react)
      - [`@babel/preset-typescript@7.24.1`](https://npmjs.com/package/@babel/preset-typescript)
      - [`@testing-library/react@14.2.2`](https://npmjs.com/package/@testing-library/react)
      - [`@tsconfig/recommended@1.0.4`](https://npmjs.com/package/@tsconfig/recommended)
      - [`@tsconfig/strictest@2.0.4`](https://npmjs.com/package/@tsconfig/strictest)
      - [`@types/jest@29.5.12`](https://npmjs.com/package/@types/jest)
      - [`@types/react-dom@18.2.22`](https://npmjs.com/package/@types/react-dom)
      - [`@types/react@18.2.70`](https://npmjs.com/package/@types/react)
      - [`@typescript-eslint/eslint-plugin@7.4.0`](https://npmjs.com/package/@typescript-eslint/eslint-plugin)
      - [`@typescript-eslint/parser@7.4.0`](https://npmjs.com/package/@typescript-eslint/parser)
      - [`esbuild@0.20.2`](https://npmjs.com/package/esbuild)
      - [`eslint-plugin-prettier@5.1.3`](https://npmjs.com/package/eslint-plugin-prettier)
      - [`eslint-plugin-react@7.34.1`](https://npmjs.com/package/eslint-plugin-react)
      - [`eslint@8.57.0`](https://npmjs.com/package/eslint)
      - [`jest-environment-jsdom@29.7.0`](https://npmjs.com/package/jest-environment-jsdom)
      - [`jest@29.7.0`](https://npmjs.com/package/jest)
      - [`prettier@3.2.5`](https://npmjs.com/package/prettier)
      - [`typescript@5.4.3`](https://npmjs.com/package/typescript)
- Updated pull request validation to test against various React versions, in PR [#46](https://github.com/compulim/use-ref-from/pull/46)
   - Moved from JSX Runtime to JSX Classic to support testing against React 16

## [0.0.3] - 2023-10-09

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

### Fixed

- Fixes [#9](https://github.com/compulim/use-ref-from/issues/9). Add typings for conditional exports, by [@compulim](https://github.com/compulim), in PR [#10](https://github.com/compulim/use-ref-from/pull/10)

## [0.0.1] - 2023-01-03

### Added

- First public release

[0.1.0]: https://github.com/compulim/use-ref-from/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/compulim/use-ref-from/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/compulim/use-ref-from/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/compulim/use-ref-from/releases/tag/v0.0.1
