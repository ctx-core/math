import { fn_sum_ } from './fn_sum_';
/**
 * Returns the sum of the items in numerator_a, adding 0 if an item is falsy.
 */
export function numerator_or_0_sum_(numerator_a) {
    return (fn_sum_(numerator_a, numerator => numerator || 0));
}
export { numerator_or_0_sum_ as _numerator_or_0_sum, numerator_or_0_sum_ as _sum__numerator__or__0, };
//# sourceMappingURL=src/numerator_or_0_sum_.js.map