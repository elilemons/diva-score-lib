# DIVA Score Type & Util Library

The library of types and utils for the app DIVA Score.

## Local Use

Ensure you have the proper ssh config (instructions in the API README.md)

While in the `/lib` directory run:

```sh
yarn build
yarn link
```

Then in the directories where you want to use this package first add the package name to the package.json:

```
@elilemons/diva-score-lib
```

Then run in each directory's root:

```sh
yarn link @elilemons/diva-score-lib
```

## Publishing

`yarn publish`

## Setting up for production use

Make sure to run `yarn unlink` in this directory and `yarn unlink @elilemons/diva-score-lib` in the directories using this library. Also run `yarn add @elilemons/diva-score-lib@latest` to ensure it's updated with your published changes.
