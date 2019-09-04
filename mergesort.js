function splitArray(arr){
    const midPoint = Math.ceil(arr.length/2)
    const first = arr.slice(0,midPoint)
    const second = arr.slice(midPoint,arr.length)
    return [first, second]
}

function merge(first, second){
    const merged = []
    while(first.length || second.length){
        first[0] <= second[0] ? merged.push(first.shift()) : merged.push(second.shift())
        console.log("FIRST:", first)
        console.log("SECOND:", second)
    }
    return [...merged, ...first, ...second]
}

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }
    const [first, second] = splitArray(arr)
    return merge(mergeSort(first), mergeSort(second))
}

console.log(merge([1,5,3], [4,5,6]))