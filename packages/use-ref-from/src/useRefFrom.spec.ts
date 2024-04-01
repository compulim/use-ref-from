/** @jest-environment jsdom */

import type { renderHook as RenderHookType } from '@testing-library/react';
import { useCallback } from 'react';
import useRefFrom from './useRefFrom';

const renderHook: typeof RenderHookType =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@testing-library/react').renderHook ||
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('@testing-library/react-hooks').renderHook;

test('should get initial value', () => {
  // WHEN: Calling useRefFrom() with 123.
  const { result } = renderHook(
    ({ input }) => {
      const ref = useRefFrom(input);

      return ref.current;
    },
    { initialProps: { input: 123 } }
  );

  // THEN: It should return 123.
  expect(result.current).toBe(123);
});

test('should get subsequent value', () => {
  // WHEN: Calling useRefFrom() with 123.
  const { rerender, result } = renderHook(
    ({ input }) => {
      const ref = useRefFrom(input);

      return ref.current;
    },
    { initialProps: { input: 123 } }
  );

  // THEN: It should return 123.
  expect(result.current).toBe(123);

  // WHEN: Re-render with 234.
  rerender({ input: 234 });

  // THEN: It should return 234.
  expect(result.current).toBe(234);
});

test('using ref in callback should return the most recent value', () => {
  // WHEN: Calling useRefFrom() with 123.
  const { rerender, result } = renderHook(
    ({ input }) => {
      const ref = useRefFrom(input);

      return useCallback(
        jest.fn(() => ref.current),
        [ref]
      );
    },
    { initialProps: { input: 123 } }
  );

  // THEN: Calling callback() should return 123.
  expect(result.current()).toBe(123);

  // GIVEN: Remember the callback function.
  const initialCallback = result.current;

  // WHEN: Re-render with 234.
  rerender({ input: 234 });

  // THEN: Calling callback() should return 234.
  expect(result.current()).toBe(234);

  // THEN: The callback function returned should be same as the initial function.
  expect(result.current).toBe(initialCallback);

  // THEN: Expect the callback function to be called twice.
  expect(initialCallback).toHaveBeenCalledTimes(2);
});

test('should not be settable', () => {
  // WHEN: Calling setter from the return value of useRefFrom().
  // THEN: It should throw a getter-only exception.
  expect(
    () =>
      // Exception thrown when `result.current` setter is called.
      renderHook(() => {
        // @ts-expect-error Intentionally setting the value to throw exception.
        useRefFrom(123).current = 234;
      }).result.current
  ).toThrow('Cannot set property current of #<Object> which has only a getter');
});
