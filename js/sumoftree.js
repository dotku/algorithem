
JavaScript Programming

/*
Given an binary Tree 

     1
    / \
   0   3
  /\   
 4  5
 
 Input :: TreeNode 0 
 output :: sum of all the root to leaf paths that contains 0 
 (1 + 0 + 4) + (1 + 0 + 5) = 11
 
 input :: TreeNode 5
 output :: sum of all the root to leaf paths that contain 5
 (1 + 0 + 5) = 6
 
 input :: TreeNode 1
 output :: sum of all the root to leaf paths that contain 1 
 (1 + 0 + 4) + (1 + 0 + 5) + (1 + 3) = 15


class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node0 = new TreeNode(0, node4, node5);
const node1 = new TreeNode(1, node0, node3);

function main(node, targetValue) {
// finding all the nodes that with the targeted value
const allTargetNodes = findAllNodes(node, targetValue);

// sum of the target values 

return allTargetNodes.reduce((prev, curr) => prev + getSumOfTree(curr), 0)
  
}

function getSumOfTree(node) {
	if (!node.left && !node.right) return node.val;
  return node.val + getSumOfTree(node.left) + getSumOfTree(node.right);
}

function findAllNodes(node, targetValue) {
	if (!node.left && !node.right) {
  	if (node.val === targetValue) return [node];
    return [];
  }
  
	if (node.val === targetValue) {
  	const nodes = []
  	const leftNodes = findAllNodes(node.left, targetValue);
    const rightNodes = findAllNodes(node.right, targetValue);
    nodes.push(node);
    if (leftNode) nodes.push(...leftNodes);
    if (rightNode) node.push(...rightNodes);
    return nodes
  }
	if (node.left) return findAllNodes(node.left, targetValue);
  if (node.right) return findAllNodes(node.right, targetValue);
  
}







