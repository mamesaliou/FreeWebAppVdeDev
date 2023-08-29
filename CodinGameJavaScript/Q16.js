function average(table) {
    if (table.length === 0) {
        return 0;
    }
    let sum = table.reduce((a, b) => a + b);
    return sum / table.length;
}

let table = [2, 4, 6, 8];
let result = average(table);
console.log(result); // 5
