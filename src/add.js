/**
 * Adds the arguments
 */
export function add(numerator_a) {
    let sum = 0;
    for (let i = 0; i < numerator_a.length; i++) {
        sum += numerator_a[i];
    }
    return sum;
}
/**
 * Sum of the numerators
 */
export { add as _sum, add as sum };
//# sourceMappingURL=src/add.js.map