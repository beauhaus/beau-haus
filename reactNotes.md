### Lec 9

setting up babel locally.

bable plugins/ presets

env preset

yarn global add babel-cli@6.24.1 --didn't work-- causes problems ("alias unavailable with yarn g install);

### npm i babel-cli@6.24.1 √

yarn init

### install babel & env(preset)

yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

FROM CL...

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

_THIS IS WORKING!_

./node_modules/.bin/babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

### lec 10: exploring JSX

### lec 11: jsx expressions -changing data

### lec 12: condit rendering

### lec 13: es6 (let/const)

### lec 18: basic forms & inputs-- "e.preventDefault()" / pushing input to array in an object

```js
    const optionEntry = e.target.elements.choiceInput.value; // inside formSubmit

        <form onSubmit={onFormSubmit}>
                <input type="text" name="choiceInput"/>
                <button>Add Option</button>
        </form>

        // If you have content flashing or a refresh, make sure to make the method accept the evt param and then
        //
...
        evt.preventDefault();
...
```

### lec 19: arrays

adding options into html from form

### lec 20: pick option/ randomness

disabled state of button

### lec 21: build-it visibility toggle

### lec 22: es6 classes

### lec 26: basic static components

### lect 28: passing props

### lect 29: class method & form inputs

### lect 28: method binding

solve error: "Cannot read property props of null" (or "...undefined")
hint: lost binding :)

## lec 32: binding methods in Counter

## lec 33: adding state to counter

## lec 34: setState syntax

## lec 35: vis toggle state

## lec 36: adding state to counter

## lec 37: state in indecision

## lec 40: state in indecision

## lec 41: default props

## lec 42: dev tools

## lec 43: removing items from the DOM ( an array)

## lec 44: lifcycle methods try{} catch {} for "bad data" & zeroing out input field

## lec 45: local storage

```js
if (!error) {
  evt.target.elements.optionField.value = '';
}
```
## lec 46: local storage for count.js

## lec 47, 48 what is webpack?

## lec 49 globals/local variables

## lec 50 webpack install and scripts commands

## lec 51-53 exports/imports

## lec 53 react hello world (react as dependency);

## lec 54 webpack - babel (loaders);

yarn add babel-core@6.25.0 babel-loader@7.1.1

## lec 55 split up the components

## lec 56 source-map-cheap (?) --testing wins "devtool"
"cheap-module-eval-sourcemap"

## lec 57 webpack devserver

## lec 58 class properties syntax (es7);

## lec 59 installing react-modal

## lec 60 passing built-in children

## lec 61 settin up react-modal

## lec 62 styling react

## lec 64 css scss loaders style-loader/css-loader

```.json
module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  ```

  ## lec 65 rems, BEM, sass

  by default 1rem = 16px;

  
  html {
        font-size: 62.5%;
        This changes the rem to a base-10 system (because 16 * .625 = 10)

        So... 2.2rem = 22px, etc etc.
  }

  ## lec 66 css reset NORMALIZE

  yarn add normalize.css

  ## lec 67 theming with sass variables
  

  ## lec 68 sass function "darken()"...BEM... sass folder structure, btn:disabled...

  ## lec 69 -70 styling components

  ## lec 71 styling the modal (3rd party); transition, word-break.

  ## lec 72 media queries!

  ## lec

  ## lec

  ## lec

  ## lec

  ## lec

  ## lec

  ## lec

  ## lec

  ## lec
