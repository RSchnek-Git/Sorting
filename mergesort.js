function splitArray(arr){
    const midPoint = Math.ceil(arr.length/2)
    const first = arr.slice(0,midPoint)
    const second = arr.slice(midPoint,arr.length)
    return [first, second]
}

function merge(first, second){
    const merged = []
    let i = 0
    let j = 0
    //while(i < first.length || j < second.length){
    while (true) {
        // first[0] <= second[0] ? merged.push(first.shift()) : merged.push(second.shift())
        if(i < first.length && j < second.length){
            if(first[i] <= second[j]){
                merged.push(first[i])
                i++
            } else {
                merged.push(second[j])
                j++
            }
        } else if(j < second.length){
            merged.push(second[j])
            j++
        } else if(i < first.length){
            merged.push(first[i])
            i++
        } else {
            return merged
        }
    }
    // return merged
}

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }
    const [first, second] = splitArray(arr)
    return merge(mergeSort(first), mergeSort(second))
}