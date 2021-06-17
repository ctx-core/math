/**
 * Multiplies the arguments
 */
export function mul(values) {
    let val = values[0];
    for (let i = 1; i < values.length; i++) {
        val *= values[i];
    }
    return val;
}
//# sourceMappingURL=src/mul.js.map