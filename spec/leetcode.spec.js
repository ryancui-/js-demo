/**
 * Created by ryancui on 2017/6/25.
 */
import f from '../leetcode/125';

describe('leetcode 125', () => {
  it('case 1', () => {
    expect(f('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('case 2', () => {
    expect(f('  ')).toBe(true);
  })
});
