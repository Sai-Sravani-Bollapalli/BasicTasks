# Difference between copy by value and copy by reference.

Primitive datatypes(numbers, boolean, string) are copied by value. For example

```markdown
var a=5; 
var b=a;
a=10;
console.log(a,b);  //10.5
```

- var a=5, will create space in the memory for 'a' and will be assigned a value 5. 
- var b-a, will creae space in memory for 'b', and the value of 'a' which is 5 is kept in 'b'.
- a=10, Now the value of 'a' is changed to 10
- The location of 'a' and 'b' are different. Hence, when the value of 'a' is changed, it doesn't effect the value in 'b'

Composite datatypes(array, object) are copied by reference. For example

```markdown
var a=[1,2,3];
var b=a;
a[0]=4;
console.log(a,b);  //[4,2,3], [4,2,3]
```

- var a=[1,2,3] will create an array in the memory for 'a' and will be assigned with values 1,2,3
- var b-a, will creae space in memory for 'b'and point the same memory of 'a'
- a[0]=4, Now the value of 'a[0]' is changed to 4
- The location of 'a' and 'b' are same. Hence, when the value of 'a' is changed, it will also effect the value in 'b'







# How to copy by value a composite datatype (array+objects).

Composite datatypes(array, object) are copied by reference. But if you want to copy by value a composite datatype, we need to use spread operator(…), it spreads the elements of that particular array or object and its values can be used to assign to some other variable. For example

```markdown
var a=[1,2,3];
var b=[...a];
var c=a;
a[0]=4;
console.log(a,b,c);    //[4,2,3], [1,2,3], [4,2,3]
```

- var a=[1,2,3] will create an array in the memory for 'a' and will be assigned with values 1,2,3
- var b=[...a], here spread operator is used, hence the changes in 'a' doesn't effect 'b'
- var c=a, will creae space in memory for 'c'and point the same memory of 'a'
- a[0]=4, Now the value of 'a[0]' is changed to 4

