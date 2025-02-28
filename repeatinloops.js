let n = 3;
let lowerpart = "";
let upperpart = "";
for (let i = 0; i < n; i++) {
    upperpart = upperpart + `${" ".repeat(n - i - 1)}${"*".repeat(2 * i + 1)}\n`

}
for (let j = n - 1; j > 0; j--) {
    lowerpart = lowerpart + `${" ".repeat(n - j)}${"*".repeat(2 * j - 1)}\n`
    // lowerpart = `${" ".repeat(n - j)}${"*".repeat(2 * j - 1)}\n` //both are different- this will overwrite lowerpart string
    // lowerpart = lowerpart + `${" ".repeat(n - j)} ${"*".repeat(2 * j - 1)}\n` //this will add spaces inbetween string
}
console.log(upperpart + lowerpart.trimEnd());