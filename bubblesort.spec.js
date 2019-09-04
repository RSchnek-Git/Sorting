describe('Bubble Sort', function(){
    // beforeAll(function () {
    //     spyOn(array, 'swap').and.callThrough();
    // });
    // it('number of swaps should be exactly 3 swaps', function () {
    //     bubbleSort(array);
    //     expect(swap.calls.count()).toEqual(3);
    // })
    it('handles an empty array', function () {
        expect(bubbleSort([])).toEqual([]);
    });
    it('sorts an array from smallest to largest', function () {
        let arr = [3, 1, 2, 4, 8, 7]
        expect(bubbleSort(arr)).toEqual([1, 2, 3, 4, 7, 8]);
        expect(arr.length).toEqual(6)
    });
    it('sorts an array with muliple passes', function () {
        let arr = [55, 3, 28, 27, 1, 6]
        expect(bubbleSort(arr)).toEqual([1, 3, 6, 27, 28, 55]);
        expect(arr.length).toEqual(6)
    });
});