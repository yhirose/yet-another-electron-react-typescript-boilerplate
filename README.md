yet-another-electron-react-typescript-boilerplate
=================================================

Yet another Electron-React-TypeScript boilerplate with [Create React App](https://create-react-app.dev) and [Electron Builder](https://www.electron.build). No eject is required.


Steps
-----

#### 1. Check Node.js version used in Electron

```
# As of 9/23/2019 at https://electronjs.org
Electron  6.0.10
Node      12.4.0
```

#### 2. Generate a TypeScript project with [Create React App](https://github.com/facebook/create-react-app)

```
npx create-react-app app --typescript
```

[[Initial Code](https://github.com/yhirose/yet-another-electron-react-typescript-boilerplate/tree/89d57b813b146e5e7de1ddf3c9630864f4cf4218)]

#### 3. Setup development build environment

```
yarn add electron concurrently wait-on -D
```

[[Code Changes](https://github.com/yhirose/yet-another-electron-react-typescript-boilerplate/commit/d7c05fbefb7c2a3b977920062a450140e7dadde2?diff=unified)]

The following script will invoke development build:

```
yarn electron:serve
```

#### 4. Add main process hot-reloading and DevTools support

```
yarn add electron-reload electron-devtools-installer @types/electron-devtools-installer
```

[[Code Changes](https://github.com/yhirose/yet-another-electron-react-typescript-boilerplate/commit/521a1aad6cf43310d0f5c71df438910b34fc8db9?diff=unified)]

Any changes made in main process code will take effect immediately.

#### 6. Added `preload` script

Render process can access features in Main process safely via `preload` script.

[[Code Changes](https://github.com/yhirose/yet-another-electron-react-typescript-boilerplate/commit/870e9f5b0a44fb94cd8b8465b03a573e079614fd)]

#### 7. Setup production package environment

```
yarn add electron-builder move-cli rimraf -D
yarn add electron-is-dev
```

[[Code Changes](https://github.com/yhirose/yet-another-electron-react-typescript-boilerplate/commit/62504f8e025332c595d1045ed92042fd53afb762)]

The following script will make distribution packages:

```
yarn electron:pack
```
