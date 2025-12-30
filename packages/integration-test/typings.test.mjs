import { expect } from 'expect';
import { before, test } from 'node:test';
import { createCompilerHost, createProgram, flattenDiagnosticMessageText, getPreEmitDiagnostics } from 'typescript';

/** @type {ReturnType<typeof createCompilerHost>} */
let host;

before(() => {
  host = createCompilerHost({ noEmit: true, strict: true });
});

test('typings should work', () => {
  // GIVEN: TypeScript compiler to compile ./typings/simple.ts.
  const program = createProgram({ host, options: {}, rootNames: ['./typings/simple.ts'] });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should have no errors.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(0);
});

test('setter should fail', () => {
  // GIVEN: TypeScript compiler to compile ./typings/setter.fail.ts.
  const program = createProgram({ host, options: {}, rootNames: ['./typings/setter.fail.ts'] });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should throw error about read-only property.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(1);
  expect(errorMessages[0]).toBe("Cannot assign to 'current' because it is a read-only property.");
});
