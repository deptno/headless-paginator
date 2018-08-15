# headless-paginator [![Build Status](https://travis-ci.org/deptno/headless-paginator.svg?branch=master)](https://travis-ci.org/deptno/headless-paginator)
[![npm](https://img.shields.io/npm/dt/headless-paginator.svg?style=for-the-badge)](https://www.npmjs.com/package/headless-paginator)

## Install

```bash
npm install headless-paginator
```

## API

* first(): 1;
* last(total, limit: number): number;
* next(total, limit, pos: number): number;
* prev(total, limit, pos: number): number;
* range(total, limit, pos, range: number): {start: number, end: number};

### Arguments

> total

items total count

> limit

items on one page

> pos

current page number(1 to n)

> range

navigator range

---

## example

```javascript
{
    total: 81,
    limit: 10,
    pos: 7,
    range: 5
}
```

[1] [2] [3] [4] [5]

---

[6] **[7]** [8] [9]

---
```javascript
range(...)
// {start: 6, end: 9}
next(...)
// 8
next(...)
// 9
next(...)
// 9
prev(...)
// 8
first()
// 1
last(...)
// 9
```

## license
MIT
