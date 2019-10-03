[![Build Status](https://travis-ci.org/blove/ngrx-testing.svg?branch=master)](https://travis-ci.org/blove/ngrx-testing)

# ngrx-mockstore example project

Implements a mock store in `add.component.spec.ts`.

## Test

This project uses Jest (instead of Karma) for running tests.
Run the full test suite via:

```bash
$ npm run test
```

You can also run the tests in a watch mode via:

```bash
$ npm run test:watch
```

This project uses Jest snapshot testing.
Update the snapshots via:

```bash
$ npm run test -- --updateSnapshot
```


## Serve

Start up the Angular CLI development server via:

```bash
$ ng serve
```
