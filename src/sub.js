/**
 * Subtracts each in denominator_a from the value
 */
export function sub(value, denominator_a) {
    for (let i = 0; i < denominator_a.length; i++) {
        value -= denominator_a[i];
    }
    return value;
}
//# sourceMappingURL=src/sub.js.map