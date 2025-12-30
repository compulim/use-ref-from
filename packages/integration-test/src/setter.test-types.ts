import { useRefFrom } from 'use-ref-from';

// @ts-expect-error Cannot assign to 'current' because it is a read-only property.
useRefFrom<number>(123).current = 234;
