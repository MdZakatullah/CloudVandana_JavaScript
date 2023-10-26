function descendingBubbleSort(arr) {
    let len = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] < arr[i + 1]) {
                // Swap the elements
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const unsortedArray = [5, 1, 9, 3, 7];
const sortedArray = descendingBubbleSort(unsortedArray);

console.log("Sorted Array in Descending Order: " + sortedArray);
