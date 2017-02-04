import {first, last, next, prev, range} from '.';

describe('constructor', () => {
    it('first', () => {
        expect(first()).toBe(1);
    });
    it('last', () => {
        expect(last(151, 30)).toBe(6);
        expect(last(1, 30)).toBe(1);
        expect(last(30, 30)).toBe(1);
        expect(last(31, 30)).toBe(2);

        expect(last(151, 20)).toBe(8);
        expect(last(1, 20)).toBe(1);
        expect(last(30, 20)).toBe(2);
        expect(last(31, 20)).toBe(2);
    });
    it('next', () => {
        expect(next(151, 30, 1)).toBe(2);
        expect(next(151, 30, 2)).toBe(3);
        expect(next(151, 30, 3)).toBe(4);
        expect(next(151, 30, 4)).toBe(5);
        expect(next(151, 30, 5)).toBe(6);
        expect(next(151, 30, 6)).toBe(6);
    });
    it('prev', () => {
        expect(prev(151, 30, 1)).toBe(1);
        expect(prev(151, 30, 2)).toBe(1);
        expect(prev(151, 30, 3)).toBe(2);
        expect(prev(151, 30, 4)).toBe(3);
        expect(prev(151, 30, 5)).toBe(4);
        expect(prev(151, 30, 6)).toBe(5);
    });
    it('range', () => {
        expect(range(101, 10, 11, 10)).toEqual({start: 11, end: 11});
        expect(range(101, 10, 1, 10)).toEqual({start: 1, end: 10});
        expect(range(101, 10, 9, 10)).toEqual({start: 1, end: 10});
        expect(range(101, 10, 10, 10)).toEqual({start: 1, end: 10});
        expect(range(151, 30, 2, 10)).toEqual({start: 1, end: 6});
        expect(range(301, 30, 3, 10)).toEqual({start: 1, end: 10});
        expect(range(301, 30, 11, 10)).toEqual({start: 11, end: 11});
    });
});
