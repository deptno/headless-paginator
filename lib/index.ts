export const first = () => 1;
export const last  = (total, limit) => Math.ceil(total / limit);
export const next  = (total, limit, pos) => Math.min(pos + 1, last(total, limit));
export const prev  = (total, limit, pos) => Math.max(pos - 1, 1);
export const range = (total, limit, pos, range) => {
    for (let start = 1, lastPos = last(total, limit); start <= lastPos; start += range) {
        if (start + range > pos) {
            return {start, end: Math.min(start + range - 1, lastPos)};
        }
    }
};
