function bubbleSort(array) {
    let sortable = false
    while (!sortable) {
        sortable = true;
        for (let i = 0; i < array.length; i++) {
            let current = array[i];
            let next = array[i + 1]
            if (current > next) {
                sortable = false
                array[i] = next
                array[i + 1] = current
            }
        }
    }
    return array
}

// function swap (numOne, numTwo) {
//     let first = numTwo
//     let second = numOne
//     return first, second
// }