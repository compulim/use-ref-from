# `use-ref-from`

`React.useRef` with an immediate setter and read-only value.

## Background

Aids `useCallback` and `useMemo` for better memoization, reduce wasted render, and properly signal render loop.

By using `useRefFrom`, React component developers can make sure their custom hooks are properly memoized.

## How to use

Following examples shows how `useRefFrom` help decoupling mutation for callbacks.

### Without using `useRefFrom`

Return function from `useCallback` could change on every render.

```tsx
const MyComponent = ({ message }: { message: string }) => {
  // `handleClick` changes on every update to `message`.
  const handleClick = useCallback(() => {
    alert(message);
  }, [message]);

  return <button onClick={handleClick}>Click me</button>;
};
```

### Decoupling mutation without `useRefFrom`

Decoupling `message` from `useCallback` by `useRef`.

```tsx
const MyComponent = ({ message }: { message: string }) => {
  const messageRef = useRef<string>();

  messageRef.current = message;

  // `handleClick` stay intact regardless of `message`.
  const handleClick = useCallback(() => {
    // `messageRef.current` is `string | null`, unsafe casting is required.
    alert(messageRef.current as string);
  }, [messageRef]);

  return <button onClick={handleClick}>Click me</button>;
};
```

### Decoupling `value` with `useRefFrom`

Decoupling `value` from `useCallback` by `useRefFrom`. It also helps typing and read-only.

```tsx
const MyComponent = ({ message }: { message: string }) => {
  const messageRef = useRefFrom<string>(message);

  // `handleClick` stay intact regardless of `message`.
  const handleClick = useCallback(() => {
    // `messageRef.current` is `readonly string`.
    alert(messageRef.current);

    // ❌ `messageRef.current` is read-only. The following line will fail at compile-time.
    messageRef.current = 'Hello, World!'.
  }, [messageRef]);

  return <button onClick={handleClick}>Click me</button>;
};
```

## API

```ts
function useRefFrom<T>(value: T): RefObject<T> & { get current(): T };
```

## Behaviors

### Ref object cannot be set

The `RefObject<T>` returned by `useRefFrom()` will be read-only and cannot be set. This is by design.

## Contributions

Like us? [Star](https://github.com/compulim/use-ref-from/stargazers) us.

Want to make it better? [File](https://github.com/compulim/use-ref-from/issues) us an issue.

Don't like something you see? [Submit](https://github.com/compulim/use-ref-from/pulls) a pull request.
