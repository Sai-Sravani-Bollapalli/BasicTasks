# Difference between copy by value and copy by reference.

Primitive datatypes(numbers, boolean, string) are copied by value. Lets dig in using an example

```markdown
var a=5; 
var b=a;
a=10;
console.log(a,b);  //10.5
```

var a=5, will create space in the memory for 'a' and will be assigned a value 5. 
var b-a, will creae space in memory for 'b', and will be assigned a value of 'a' which is 5.
a=10, Now the valueof 
