# Description
This is repository with tests for Vistaprint

## Installation
To install project run next command:
```
yarn
```

## Run tests
To run all tests, run command:
```
yarn wdio
```

To run tests from christmasCards folder, run command:
```
yarn wdio --suite christmas
```

To run a specific tests - for example embossedFoil.js, run command:
```
yarn wdio --spec=test/specs/christmasCards/embossedFoil.js
```

In headless mode, command is:
```
yarn wdio:headless
```

The list of expect commands available can be found on [WebdriverIO website](https://webdriver.io/docs/api/expect-webdriverio/)