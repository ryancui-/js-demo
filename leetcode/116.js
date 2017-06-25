/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */

var connect = function (root) {
  if (!root) {
    return;
  }

  var queue = [];
  queue.push({
    node: root,
    level: 0
  });

  while (queue.length > 0) {
    var item = queue.shift();
    if (item.node.left) {
      queue.push({
        node: item.node.left,
        level: item.level + 1
      });
    }

    if (item.node.right) {
      queue.push({
        node: item.node.right,
        level: item.level + 1
      });
    }

    if (queue.length > 0 && queue[0].level === item.level) {
      item.node.next = queue[0].node;
    } else {
      item.node.next = null;
    }
  }
};

var connect = function (root) {
  if (!root) {
    return;
  }

  if (root.left) {
    root.left.next = root.right;
    if (root.next) {
      root.right.next = root.next.left;
    }
  }

  connect(root.left);
  connect(root.right);
};