/** @jest-environment jsdom */

import { renderHook } from '@testing-library/react';
import { useRefFrom } from 'use-ref-from';

test('simple scenario', () => {
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
