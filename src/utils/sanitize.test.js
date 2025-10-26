import { sanitizeInput } from './sanitize';

test('removes HTML tags', () => {
  const dirty = "<script>alert('xss')</script>hello";
  const clean = sanitizeInput(dirty);
  expect(clean).toBe('hello');
});

test('trims whitespace', () => {
  expect(sanitizeInput('   world  ')).toBe('world');
});
