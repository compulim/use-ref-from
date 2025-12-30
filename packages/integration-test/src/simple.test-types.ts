import { useRefFrom } from 'use-ref-from';

// eslint-disable-next-line react-hooks/rules-of-hooks
const ref = useRefFrom<number>(123);
const value: number = ref.current;

console.log(value);
