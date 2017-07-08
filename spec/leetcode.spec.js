/**
 * Created by ryancui on 2017/6/25.
 */
import f125 from '../leetcode/125';
import f313 from '../leetcode/313';

describe('leetcode 125', () => {
  it('case 1', () => {
    expect(f125('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('case 2', () => {
    expect(f125('  ')).toBe(true);
  })
});

describe('leetcode 313', () => {
  it('case 1', () => {
    expect(f313(8, [2, 7, 13, 19])).toBe(16);
  });

  it('case 2', () => {
    expect(f313(12, [2, 7, 13, 19])).toBe(32);
  });
});
