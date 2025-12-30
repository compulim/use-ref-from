import useRefFrom from '../useRefFrom.ts';

useRefFrom(1) satisfies { readonly current: number };

// @ts-expect-error Type 'number' is not assignable to type 'string'.
useRefFrom(1) satisfies { readonly current: string };
