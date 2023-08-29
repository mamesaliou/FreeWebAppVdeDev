function filterDuplicates(data) {
    if (data == null) {
        console.error('Data cannot be null');
        return null;
    }
    let result;
    result = data.filter((x, i) => data.indexOf(x) === i);
    return result;
}

let data = [7, 3, 6, 4, 3, 3, 4, 9];
let result = filterDuplicates(data);
console.log(result); // [7, 3, 6, 4, 9]
