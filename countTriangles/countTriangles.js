var countTriangles = function(graph) {
	var triangles = {};
	
	var isTriangle = function(node) {
		var edges = node.edges;
		if(edges.length >= 2) {
			for(var i = 0; i < edges.length; i++) {
				var edge = edges[i];
				if (edge.edges.indexOf(node) !== -1) {
					var triangle = [node.val, edge.val, edge[i].val].sort().join('');
					if(!triangles[triangle]) {
						triangles[triangle] = 1;
					}
				}
				isTriangle(edges[i]);
			}
		}
	}
	isTriangle(graph);
	return triangles.length;
};