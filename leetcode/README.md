LeetCode 刷题笔记
=====

以后 LeetCode 的刷题笔记就直接写在这里，不单独发 blog 了，整理在一起以后复习查看也比较方便。

目前刷题的顺序是**没有顺序**，按那个 Pick One 按钮，随到哪题就做哪题呗。

代码就在这个目录下的 js 文件，文件名是 LeetCode 题目编号。这里的笔记会很少涉及具体的 code.

## 116 Populating Next Right Pointers in Each Node   

`二叉树` `层次遍历`

是一个二叉树的层次遍历，对当前节点，如果有他的 sibling 存在，那就把 next 指过去，否则就指向 null. 复习了一遍二叉树的层次遍历。

由于题目有前提这是个完全二叉树，所以还可以递归子树的形式去做，最最关键的是下面这行：

```javascript
root.right.next = root.next.left
```

把右节点的 next 指向自己 sibling 的左节点，因为这是颗完全二叉树，所以 sibling 的左节点必然存在（因为自己有孩子节点）。

## 125 Valid Palindrome

`正则`

判断字符串里的字母数字是否回文串，忽略大小写。

首先是通过正则去掉字符串的其余字符，然后就是回文的判断。

#### 清空字符的正则

- `/\W/g`
- `/[^a-zA-Z0-9]/g`

#### 判断回文串

- 两个指针一头一尾开始遍历，相遇结束
- `a.split('').reverse().join('') === a`