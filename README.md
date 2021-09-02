### svelte-global-store

This repo demonstrates issues that arises if multiple of the same app is created, they end up sharing the store.

To start

```bash
yarn install && yarn dev
```

Navigate to

```
http://localhost:8000
```

The DOM should display the mangled stores.

You can also write

```
console.log(window.appOne.getExternal())
console.log(window.appOne.getExternal())
console.log(window.appThree.getExternal())
```

to get the data from the external imported stores.

To compare the internal stores, the DOM shows the data in the internal store created within the component and not imported.

Example-image of output;

![image](https://user-images.githubusercontent.com/8393994/131813354-a6c8d114-8cde-4277-b7b1-a8a257331fe2.png)

