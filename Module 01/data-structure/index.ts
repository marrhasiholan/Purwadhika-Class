// HASH TABLE / MAP

const userObj = {
    name: "Budi",
    age: 22,
};
console.log(userObj);

const userMap = new Map(Object.entries(userObj));
console.log(userMap);
userMap.set("phone", "0000");
console.log(userMap);

// LINKED LIST
// JARANG DIGUNAKAN
const linkedList = {
    head: {
        element: "A",
        next: {
            element: "B",
            next: {
                element: "C",
                next: {
                    element: "D",
                    next: null,
                },
            } ,
        },
    },
};
console.log(linkedList);