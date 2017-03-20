# example-jest-snapshot

This is sample for Jest feature "Snapshot Testing". See `src/__tests__` if you interested in it.

## Prerequisites

I'm using Node v6 and yarn.

## Setup

```$xslt
$ yarn # Or simply npm install
```

## Run

```$xslt
$ yarn start
```

## Test

```$xslt
$ yarn test
```

If you want to update snapshots, hit it with -u option.

```$xslt
$ yarn test -- -u
```

To check snapshot as more like HTML, you can use jest-html

```$xslt
$ yarn jest-html
```
