import { useRefFrom } from 'use-ref-from';

useRefFrom<number>(123).current = 234;
