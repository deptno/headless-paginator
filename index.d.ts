declare module 'headless-paginator' {
    export const first:() => 1;
    export const last:(total, limit) => number;
    export const next:(total, limit, pos) => number;
    export const prev:(total, limit, pos) => number;
    export const range:(total, limit, pos, range) => number;
}
