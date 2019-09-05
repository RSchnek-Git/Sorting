getPivot = array => array[0]

makePartition = (pivot, array) => {
  const [left, pivots, right] = [[], [], []]
  array.forEach(item => {
    if(item < pivot) {
     left.push(item)
    } else if(item === pivot) {
     pivots.push(item)
    } else {
     right.push(item)
    }
  })
  return [left, pivots, right]
}

quickSort = (array) => {
  if(array.length <= 1) return array
  const pivot = getPivot(array)
  const [left, pivots, right] = makePartition(pivot, array)
  return [...quickSort(left), ...pivots, ...quickSort(right)]
}