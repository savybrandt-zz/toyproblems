/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
You should return [1,2,3,6,9,8,7,4,5].
*/

var spiralOrder = function(matrix) {
    var height = matrix.length;
    var width = matrix[0] ? matrix[0].length : 0;
    var depth = 0;
    var results = [];
    
    var traverse = function() {
        
        if (width === 0) {
            return;
        }
        //right
        for(var r = depth; r < width; r++) {
            results.push(matrix[depth][r]);
        }
        //down
        for(var d = depth+1; d < height; d++) {
            results.push(matrix[d][width-1]);
        }
        //left
        for(var l = width-2; l >= depth; l--) {
            results.push(matrix[height-1][l]);
        }
        //up
        for(var u = height-2; u > depth; u--) {
            results.push(matrix[u][depth]);
        }
        depth++;
        height--;
        width--;
        traverse();
    };
    traverse();
    return results;
};