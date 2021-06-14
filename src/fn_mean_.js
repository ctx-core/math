import { fn_sum_ } from './fn_sum_';
/**
 * Averages the items in in a
 */
export function fn_mean_(a, numerator_) {
    const fn_sum = fn_sum_(a, numerator_);
    return fn_sum / a.length;
}
export { fn_mean_ as fn_avg, fn_mean_ as _fn_avg, fn_mean_ as _avg__fn, };
//# sourceMappingURL=src/fn_mean_.js.map