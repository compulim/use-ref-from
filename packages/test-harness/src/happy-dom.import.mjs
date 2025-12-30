import { GlobalRegistrator } from '@happy-dom/global-registrator';
import { afterEach, beforeEach } from 'node:test';

// `node --import` does passthrough things set on `globalThis` to the test.
// However, `node --test-global-setup` will not passthrough. The test will run without `globalThis.document`.
// Not sure if this is intentional or not. We must load this module using `node --import`.

beforeEach(() => {
  GlobalRegistrator.register({
    height: 1080,
    url: 'http://localhost:3000',
    width: 1920
  });
});

afterEach(() => {
  // Must unregister, otherwise, there will be promises lingering.
  GlobalRegistrator.unregister();
});

export {};
