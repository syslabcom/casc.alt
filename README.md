# README

## Installation

Run

```bash
make
```

Maybe also:

```bash
npx yarn install --force
```


## Development

To compile the tailwind CSS you have two options.

`npx yarn watch`: This compiles the tailwind CSS in watch-mode. Any changes you
make to the main tailwind css file (`resources/styles/main.css`) will
automatically compiled to the target CSS file (`dist/main.min.css`).

`npx yarn build`: This compiles the tailwind CSS once for production use -
minified and optimized.


## Package structure

`/dist`: - contains the compiled CSS and JS resources.
`/resources`: - contains all the uncompiled CSS and JS resources.

**NOTE:**

Currently the package structure is more complex.
`/dist` only contains the compiled tailwind CSS (`dist/main.min.css`).
`/resources` currently only contains the uncompiled tailwind CSS file (`resources/styles/main.css`).

`/brands` - contains the brand-specific CSS files.
`/css` - contains the old compiled and uncompiled CSS files.
`/js` - contains the old compiled and uncompiled JS files.
`/_sass` - contains the old compiled and uncompiled SASS files.
`/less` - contains the old compiled and uncompiled LESS files.

In the mid-term we want to simplify the package structure to only contain the
`/dist` and `/resources` folders.
