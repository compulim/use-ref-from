import { useRefFrom } from 'use-ref-from';

// eslint-disable-next-line react-hooks/rules-of-hooks
useRefFrom<number>(123).current = 234;
