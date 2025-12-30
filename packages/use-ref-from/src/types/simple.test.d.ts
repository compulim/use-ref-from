import { useRefFrom } from '../../src/index.ts';

useRefFrom(1) satisfies { current: number };

// @ts-expect-error Type 'number' is not assignable to type 'string'.
useRefFrom(1) satisfies { current: string };
