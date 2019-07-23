export const first = () => 1
export const last = ({total = 0, limit = 0}: TotalLimit) => Math.ceil(total / limit) || 1
export const next = ({total = 0, limit = 0, pos = 1}: TotalLimitPos) => Math.min(pos + 1, last({total, limit}))
export const prev = ({pos = 1}) => Math.max(pos - 1, 1)
export const range = ({total = 0, limit = 0, pos = 1, range = 1}: TotalLimitPosRange) => {
  for (let start = 1, lastPos = last({total, limit}); start <= lastPos; start += range) {
    if (start + range > pos) {
      return {start, end: Math.min(start + range - 1, lastPos)}
    }
  }
  return {start: 1, end: 1}
}

type TotalLimit = {
  total: number
  limit: number
}
type TotalLimitPos = TotalLimit & {
  pos: Exclude<number, 0>
}
type TotalLimitPosRange = TotalLimitPos & {
  range: Exclude<number, 0>
}
