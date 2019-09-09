# LILLYDOO Trial Kit

Requirements to start the project: Node, yarn or npm
Once you check what was previously mentioned, then proceed to install the dependencies to run the project locally

# User Story

- Man hat bei der Testpaket-Seite die Möglichkeit die Größen 1-5 für ein trial pack auszuwählen.
- Das Bild von dem Testpaket ändert sich, abhängig von der Größe die man auswählt.
- Die Größe 1 und 2 beinhalten 99% Wasser Feuchttücher und die Größe 3 und 5 beinhalten die sensitiven Feuchttücher. 
- Alle Größen beinhalten ein kleines Päckchen von (10) Windeln.

Notes: In der Sektion “Dein Testpaket enthält” kann man das preview Bild von den Windeln und den Feuchttüchern sehen. 
Das Bild der Feuchttücher ändert sich, abhängig von der gewählten Windelgröße. Das Testpaket sollte komplett reaktionsfähig sein.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn dev
```

### Lints and fixes files
```
yarn lint
```

### End to end test

Two tests have been written to prove the user story. 
1. When the page loads, the first trial kit is selected. When the user selects the last trial kit (number 5), the image changes as well as the img in the last section of the page
2. When the page loads, the first trial kit is selected. When the user selects the second trial kit. Only the image next to it changes but in the last section the last image do not change

```
yarn test
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
