// Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

// Example 1:

// Input: 
//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

// Target = 9

// Output: True
var findTarget = function(root, k) {
    let hash = {};
    return findSum(root, k, hash)
    
};

function findSum(root, k, hash){
    if(!root){
        return false
    };
    if(hash.hasOwnProperty(k - root.val)){
        return true
    }else{
        hash[root.val] = true
        return (findSum(root.left, k, hash) || findSum(root.right, k, hash))
    };
    
}
// Traverse Inorder and use Array

var findTarget = function(root, k) {
  let arry = [];
  let inOrder = (root) => {
      if(!root) return;
      inOrder(root.left);
      arry.push(root.val);
      inOrder(root.right);
  }
  inOrder(root);
  let i = 0;
  let j = arry.length - 1;
  while(i < j){
       let suma = arry[i] + arry[j];
       if(suma > k){
           j --;
       }else if (suma < k){
           i ++;
       }else{
           return true
       };
   };
  return false
};