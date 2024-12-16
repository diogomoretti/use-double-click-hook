<img src="./src/logo.png" width="50">

# Use Double Click Hook

A React hook to detect double clicks.

## Installation

**Using npm:**
```bash
npm install use-double-click-hook
```

**Using yarn:**
```bash
yarn add use-double-click-hook
```

**Using pnpm:**
```bash
pnpm add use-double-click-hook
```

## Usage

```tsx
import { useDoubleClick } from 'use-double-click-hook';

const MyComponent = () => {
  const handleClick = useDoubleClick({
    onDoubleClick: () => {
      console.log('Double click detected!');
    }
  });

  return <div onClick={handleClick}>Double Click Me</div>;
};
```

## Options

|parameter|type|default|description|required|
|---|---|---|---|---|
|`onSuccess`|`function`|`() => {}`|A function to be called when a double click is detected.|Yes|
|`delay`|`number`|`300`|The delay in milliseconds between the first and second click.|No|

## License

[MIT License](./license.md)
