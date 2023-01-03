const { createProgram, flattenDiagnosticMessageText, getPreEmitDiagnostics } = require('typescript');

test('typings should work', () => {
  // GIVEN: TypeScript compiler to compile ./typings/simple.ts.
  const program = createProgram(['./typings/simple.ts'], { noEmit: true, strict: true });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should have no errors.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(0);
});

test('setter should fail', () => {
  // GIVEN: TypeScript compiler to compile ./typings/setter.fail.ts.
  const program = createProgram(['./typings/setter.fail.ts'], { noEmit: true, strict: true });

  // WHEN: Compile.
  const { diagnostics } = program.emit();

  // THEN: It should throw error about read-only property.
  const allDiagnostics = getPreEmitDiagnostics(program).concat(diagnostics);
  const errorMessages = allDiagnostics.map(({ messageText }) => flattenDiagnosticMessageText(messageText));

  expect(errorMessages).toHaveLength(1);
  expect(errorMessages[0]).toBe("Cannot assign to 'current' because it is a read-only property.");
});
