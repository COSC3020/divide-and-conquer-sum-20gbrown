[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11850055&assignment_repo_type=AssignmentRepo)
# Divide and Conquer Sum

In the lectures, we've covered merge sort, which uses a divide-and-conquer
approach to sort an array of values. There are many more algorithms that take
such an approach. Implement a function that computes the sum of an array of
integers using divide and conquer, using the template in `code.js`. Test your
new function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

The recursive calls sum up the numbers in the base case, and "merges" the sums
of the recursive calls otherwise. For example, the return value for the array `a
= [1,5,-1,4]` is `9`.

To make it a bit more interesting, instead of splitting into two sub-arrays like
in merge sort, I want you to split into *three* sub-arrays at each divide step.

Hint: Like in the implementation of merge sort, you may need a helper function
that does the actual recursion.

## Runtime Analysis

What is the runtime of the algorithm that you implemented? Provide a recurrence
relation for $T(n)$ as we did for merge sort (you can ignore constant factors)
and solve it as we did in the lectures. Give the final $\Theta$ complexity.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Runtime analysis: Answer

In each recursive call, the array is divided into 3 parts, a.slice(0,mid1), a.slice(mid1,mid2), and a.slice(mid2).
Recurrence relation:

       1     if n <= 1  
T(n){
       3T(n/3) + n   if n >1

T(n) = 3 * T(n/3) + n
     = 3(3T(n/9) + n/3) + n
     = 9T(n/9) + 3n 
     = 27T(n/27) + 4n 
     ...
     =3^i(n/2^i) + in
for i = lg n
     = nT(1) + nlgn = n+nlgn member of $\Theta$(n log n)

So the runtime of the divide and conquer algorithm is $\Theta$(n log n)
