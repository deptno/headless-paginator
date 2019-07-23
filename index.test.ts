import {first, last, next, prev, range} from '.'
import t from 'tap'

t.equal(first(), 1)

t.equal(last({total: 151, limit: 30}), 6)
t.equal(last({total: 1, limit: 30}), 1)
t.equal(last({total: 30, limit: 30}), 1)
t.equal(last({total: 31, limit: 30}), 2)

t.equal(last({total: 151, limit: 20}), 8)
t.equal(last({total: 1, limit: 20}), 1)
t.equal(last({total: 30, limit: 20}), 2)
t.equal(last({total: 31, limit: 20}), 2)

t.equal(next({total: 151, limit: 30, pos: 1}), 2)
t.equal(next({total: 151, limit: 30, pos: 2}), 3)
t.equal(next({total: 151, limit: 30, pos: 3}), 4)
t.equal(next({total: 151, limit: 30, pos: 4}), 5)
t.equal(next({total: 151, limit: 30, pos: 5}), 6)
t.equal(next({total: 151, limit: 30, pos: 6}), 6)

t.equal(prev({pos: 1}), 1)
t.equal(prev({pos: 2}), 1)
t.equal(prev({pos: 3}), 2)
t.equal(prev({pos: 4}), 3)
t.equal(prev({pos: 5}), 4)
t.equal(prev({pos: 6}), 5)

t.same(range({total: 101, limit: 10, pos: 11, range: 10}), {start: 11, end: 11})
t.same(range({total: 101, limit: 10, pos: 1, range: 10}), {start: 1, end: 10})
t.same(range({total: 101, limit: 10, pos: 9, range: 10}), {start: 1, end: 10})
t.same(range({total: 101, limit: 10, pos: 10, range: 10}), {start: 1, end: 10})
t.same(range({total: 151, limit: 30, pos: 2, range: 10}), {start: 1, end: 6})
t.same(range({total: 301, limit: 30, pos: 3, range: 10}), {start: 1, end: 10})
t.same(range({total: 301, limit: 30, pos: 11, range: 10}), {start: 11, end: 11})
t.same(range({total: 1, limit: 30, pos: 1, range: 0}), {start: 1, end: 1})
t.same(range({total: 0, limit: 30, pos: 1, range: 10}), {start: 1, end: 1})
