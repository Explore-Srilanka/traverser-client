<p align="center">
  <a href="https://github.com/Explore-Srilanka">
    <img src="https://avatars.githubusercontent.com/u/58081968?s=200&v=4" width="318px" alt="logo" />
  </a>
</p>

<h3 align="center">To effectively use the modern technology to enhance the tourism in Srilanka.</h3>
<br />

## Installation

- (Use **yarn** to install the dependencies (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
yarn install
```

**or**

- (Use npm/npx to install the dependencies.)

```bash
npm install
```

This command will install all the dependencies for the API. Next rename the .env.example to .env and update the configuration.

**Run**

```bash
yarn run dev
```

## Deployment Stages 

1. develop  (dev): `automated deployment to dev environment`
2. production  (master): `automated deployment to production environmen`

## <a name="rules"></a> Coding Rules
To ensure consistency throughout the source code, keep these rules in mind as you are working:

* All features or bug fixes **must be tested** by one or more specs (unit-tests).
* All public API methods **must be documented**.
  
## Commit Message Guidelines

* **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
* **docs**: Documentation only changes
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **test**: Adding missing tests or correcting existing tests

## <a name="submit-pr"></a> Submitting a Pull Request (PR)
Before you submit your Pull Request (PR) consider the following guidelines:

1. Make your changes in a new git branch:

     ```shell
     git checkout -b my-fix-branch master
     ```
1. Create your patch, **including appropriate test cases**.
1. Follow our [Coding Rules](#rules).
1. Commit your changes using a descriptive commit message that follows our
  [commit message conventions](#commit). 
1. In GitHub, send a pull request to `traverser-client:dev`.
