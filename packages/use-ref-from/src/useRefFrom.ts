import React, { type RefObject } from 'react';

// Need to destructure instead of import for React < 16.14.0.
const { useMemo, useRef } = React;

export default function useRefFrom<T>(value: T): RefObject<T> & { get current(): T } {
  const ref = useRef<T>();

  const readOnlyRef = useMemo(() => Object.create({}, { current: { get: () => ref.current } }), [ref]);

  ref.current = value;

  return readOnlyRef;
}
