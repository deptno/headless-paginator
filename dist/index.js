"use strict";
exports.first = function () { return 1; };
exports.last = function (total, limit) { return Math.ceil(total / limit); };
exports.next = function (total, limit, pos) { return Math.min(pos + 1, exports.last(total, limit)); };
exports.prev = function (total, limit, pos) { return Math.max(pos - 1, 1); };
exports.range = function (total, limit, pos, range) {
    for (var start = 1, lastPos = exports.last(total, limit); start <= lastPos; start += range) {
        if (start + range > pos) {
            return { start: start, end: Math.min(start + range - 1, lastPos) };
        }
    }
};
