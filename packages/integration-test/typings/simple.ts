import { useRefFrom } from 'use-ref-from';

const ref = useRefFrom<number>(123);
const value: number = ref.current;

console.log(value);
