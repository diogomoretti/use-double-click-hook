# use-double-click

A React hook to detect double clicks.

## Installation

**Using npm:**
```bash
npm install use-double-click
```

**Using yarn:**
```bash
yarn add use-double-click
```

**Using pnpm:**
```bash
pnpm add use-double-click
```

## Usage

```tsx
import { useDoubleClick } from 'use-double-click';

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

|option|type|default|description|
|---|---|---|---|
|`delay`|`number`|`300`|The delay in milliseconds between the first and second click.|
|`onSuccess`|`function`|`() => {}`|A function to be called when a double click is detected.|

## License

[MIT License](./license.md)
