module.exports =
    function towelSort(matrix) {
        if (!matrix || matrix.length === 0) return []

        return matrix.reduce((arr, item, index) => {
            if (index % 2 === 1) {
                item.reverse()
            }
            return arr.concat(item)
        }, [])
    }
