describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        let arr = [3,5,1,2,7,4,8,6]
        split(arr)
        expect(arr).toEqual([[3,5,1,2],[7,4,8,6]])
        expect(arr.length).toEqual(2)
    })
})

describe('Merge function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        let arr = [[1,3,4,6],[7,9,10,12]]
        merge(arr)
        expect(arr).toEqual([1,3,4,6,7,9,10,12])
        expect(arr.length).toEqual(8)
    })
})