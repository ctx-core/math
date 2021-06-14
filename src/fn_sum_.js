/**
 * Returns the sum of the values mapped by _numerator
 */
export function fn_sum_(a, _numerator) {
    let sum = 0;
    if (!a)
        return sum;
    for (let i = 0; i < a.length; i++) {
        sum += _numerator(a[i]);
    }
    return sum;
}
export { fn_sum_ as _fn_sum, fn_sum_ as _sum__fn, };
//# sourceMappingURL=src/fn_sum_.js.map