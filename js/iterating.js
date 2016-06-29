(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'name
    var name = ['Todd', 'Jack', 'Sarah', 'Michelle']

    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(name.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log('The first name is:' + name[0])
    console.log('The second name is:' + name[1])
    console.log('The third name is:' + name[2])
    console.log('The fourth name is:' + name[3])

    console.log("for Loop:")

    for (var i = 0; i < name.length; i++) {
    	console.log('The name at index ' + i + ' is: ' + name[i]);
    }

    console.log("ForEach Loop:")

    name.forEach(function (element, index, array) {

    	console.log('The name at index ' + index + ' is: ' + element);
    })
})();
