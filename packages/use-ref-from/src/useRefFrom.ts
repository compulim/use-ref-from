import { useMemo, useRef, type RefObject } from 'react';

export default function useRefFrom<T>(value: T): RefObject<T> & { get current(): T } {
  const ref = useRef<T>();

  const readOnlyRef = useMemo(() => Object.create({}, { current: { get: () => ref.current } }), [ref]);

  ref.current = value;

  return readOnlyRef;
}
