# react-dialogue-component
[![npm version](https://badge.fury.io/js/react-dialogue-component.svg)](https://badge.fury.io/js/react-dialogue-component) 
![tests](https://img.shields.io/badge/tests-passing-success)

A simple React component made with styled-components

<p align="center">![Example gif](./ex-react-dialogue.gif)<p>

## Table of Contents

* [Getting started](#getting-started)
* [Props](#Props)

## Getting started

### Installing
To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):


    $ npm install --save react-dialogue-component
    $ yarn add react-dialogue-component

### Example
```jsx
  import { Dialogue } from "react-dialogue-component";
  import { useState } from "react";
  
  export default function App() {
  const [dialogue, setDialogue] = useState(false);
  return (
    <div>
      <button
      onClick={() => setDialogue(!dialogue)}
      >
        active dialogue
      </button>
      <Dialogue
        isOpen={dialogue}
        onClose={() => setDialogue(false)}
        closeOnOverlayClick
        title="React Dialogue Demo"
        children="Dialogue example"
      />
    </div>
  );
}
```
[Demo of this example](https://codesandbox.io/s/react-dialogue-demo-jz20gd)

## Docs

### Props

| Name | Type | Default | Description | Required
|:-----|:-----|:-----|:-----|:-----|
| title | string | |The title of the dialogue | :x:
| children | ReactNode , string | | The description text for the component to render | :x:
| isOpen | boolean | false | Define if dialogue appear on screen | :heavy_check_mark:
| onClose | function | () => void | Triggerd when the user performs some modal closing action<br> the default actions are called when user press Esc button or click in close button "X" | :heavy_check_mark:
| closeOnOverlayClick | boolean | false | If is true onClose is called when user click on dialogue overlay |  :heavy_check_mark:


### Local Tests

1. Clone the repository.

 ```bash
  git clone git@github.com:UmberBn/react-dialogue-component.git
 ```

2. Go to project folder.

 ```bash
 cd react-dialogue-component
```
3. install the dependencies using yarn or npm
 ```bash
 yarn
 or
 npm install
```
4. run the tests script using yarn or npm.
```bash
 yarn test
 or
 npm test
 ```