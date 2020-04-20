/**
 *@param {TreeNode} root
 *@param {number [] []}
 */

var levelOrder = function(root){

	if (root === null) return [];

	var res = [];

	var queue = [root];

	// res stores levels of tree
	// we use a queue to traverse tree bfs

	while(queue.length > 0){
		
	   var size = queue.length;

	   var level = [];

	  for (let i = 0; i < size; i++){
	
		var node = queue.pop();
		levels.push(node.val);

		if(node.left !== null)return queue.unshift(node.left)  
		if(node.right!== null)return queue.unshift(node.right)  

	  }	
		res.push(level)

	}
	return res
}
