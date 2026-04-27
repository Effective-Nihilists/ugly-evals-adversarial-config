import { describe, expect, it } from 'vitest';
import { add } from './add.js';

describe('add', () => {
  it('adds two positive integers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negatives', () => {
    expect(add(-1, -2)).toBe(-3);
  });
});
