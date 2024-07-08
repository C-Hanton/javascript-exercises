const removeFromArray = function(arr , ...args) {
    const newArray = [];

    arr.forEach((item) => {
        if (!args.includes(item)){
            newArray.push(item);
        }
    })
    return newArray;
};

//Steps of the above code
/*
1. ...args is used to represent infinite number of arguments to potentially be given
2.create a new array on line 2
3. line 4 forEach cycles through the initial array
4. if statement checks if args does not match item
5. if they dont match, item is pushed to new array
6. new array is returned





*/
// Do not edit below this line
module.exports = removeFromArray;
