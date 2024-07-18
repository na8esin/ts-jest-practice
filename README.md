jest + ESMにしようとすると大変なので、むしろts-jest使ったほうが楽。

yarn add --dev jest typescript ts-jest @types/jest

yarn ts-jest config:init

```
ts-jest[config] (WARN) message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`). See https://blogs.msdn.microsoft.com/typescript/2018/01/31/announcing-typescript-2-7/#easier-ecmascript-module-interoperability for more information.
```