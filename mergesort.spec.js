describe('splitArray function', function() {
    it('is able to split an array into two halves', function() {
        let arr = [3,5,1,2,7,4,8,6]
        const res = splitArray(arr)
        expect(res).toEqual([[3,5,1,2],[7,4,8,6]])
        expect(res.length).toEqual(2)
    })
    it('is able to handle odd-sized arrays', function() {
        let arr = [3,5,1,2,7,4,8]
        const res = splitArray(arr)
        expect(res).toEqual([[3,5,1,2],[7,4,8]])
    })
})

describe('merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let arrOne = [1,3,4,6]
        let arrTwo = [7,9,10,12]
        const res = merge(arrOne, arrTwo)
        expect(res).toEqual([1,3,4,6,7,9,10,12])
        expect(res.length).toEqual(8)
    })
})

describe('mergeSort function', function(){
    it('sorts an array from smallest to largest', function () {
        let arr = [3, 1, 2, 4, 8, 7]
        expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 7, 8]);
        expect(arr.length).toEqual(6)
    });
    it('sorts an array that is odd-sized', function () {
        let arr = [55, 3, 28, 27, 1]
        expect(mergeSort(arr)).toEqual([1, 3, 27, 28, 55]);
        expect(arr.length).toEqual(5)
    });
})