# react-dialogue-component
[![npm version](https://badge.fury.io/js/react-dialogue-component.svg)](https://badge.fury.io/js/react-dialogue-component) 
![coverage](https://img.shields.io/badge/coverage-100%25-success)
![tests](https://img.shields.io/badge/tests-passing-success)

A simple React component made with styled-components

![Example gif](./ex-react-dialogue.gif)

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
  import { useState } from "react";
  import { Dialogue } from "react-dialogue-component";
  
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
| title | string | | The title of the dialogue | :x:
| children | ReactNode, string | | The description text for the component to render | :x:
| isOpen | boolean | false | Define if dialogue appear on screen | :heavy_check_mark:
| onClose | function | () => void | Triggerd when the user performs some modal closing action<br> the default actions are called when user press Esc button or click in close button "X" | :heavy_check_mark:
| closeOnOverlayClick | boolean | false | If is true onClose is called when user click on dialogue overlay |  :heavy_check_mark:


### Run Local

1. Clone this repository.

 ```bash
  git clone git@github.com:UmberBn/react-dialogue-component.git
 ```

2. Go to project folder.

 ```bash
 cd react-dialogue-component
```
3. Install the dependencies using yarn or npm

 ```bash
 yarn
 or
 npm install
```

 ### Scripts

  For execute a script you need to clone this repository and install the project dependencies [See Local section](#local)
  
  - Run all tests

  ```bash
    "npm|yarn" test
  ```
  - Generate the coverage of tests

  ```bash
    "npm|yarn" run test:coverage
  ```

  - Open the coverage file (run after test:coverage)

   You need google chrome.

  ```bash
    "npm|yarn" run open:coverage
  ```