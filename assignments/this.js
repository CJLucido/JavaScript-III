/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*

    For all forms of this I would say it is similar to the English use of it in comparison to 'that', that is 'this' points to an object that is NEAR us! If we were surrounded by only space then the concept of space would be the only object near us. In code it is like this but refers only to objects' attribute of containing things, so it points to the object nearest as a container. 

    In technical terms, 'this' points to the parent scope or newly created parent scope of a container object, OR it will point to the object that you are calling or applying. 

* 1. Window binding is the principle that if a declared function or function expression was defined/assigned within the global scope and 'this was used in their definitions, then 'this' refers to the window (the actual JS language) or in node it points to the global object.

* 2. Implicit Binding is the principle that if this is used in an objects method, than it points to that object itself. So 'this' will reference a property/key value pair within the object.

* 3. New binding is the principle that when a constructor function is made using 'this' on the source objects key value pairs, then when a new object is created using that constructor function, 'this' will refer to that new object and not the source object or the constructor function.

* 4. Explicit binding is the principle that, even if object properties are defined, an object's properties can be redefined/assigned to another object's properties using the .call or .apply methods. We can aslo use it to redefine/assign properties for a function using .bind. In other words, we can tell 'this' what it means. 
*
* write out a code example of each explanation above
*/

// Principle 1

//code example for Window Binding

function atGlbl(){
    console.log(this.world)
};

const world = "won't be this";

atGlbl(); //browser seems to be defaulting "use strict" because undefined is coming back instead of window

// Principle 2

// code example for Implicit Binding

let principal2 = {
    name: "new object",
    location: "place",
    activity: function(){
        console.log(`${this.name} at ${this.location}`)
    },
};

principal2.activity();

// Principle 3

//code example for New Binding

function Principal3(props){
    this.name = props.name;
    this.location = props.location;
    this.year = props.year;
    this.explain = function(){
        return `${this.name} was bound to her husband ${this.location} in ${this.year}`
    }
};

const newlyWed = new Principal3(
            {
            name:"Mary Lee Bound",
            location:"three steps down",
            year:1999
        }
    );

console.log(newlyWed.explain());

// Principle 4

// code example for Explicit Binding



const oldlyWed = new Principal3(
    {
    name:"Marie Turner Roun",
    location:"back up town",
    year: 1867
}
);

console.log(principal2.activity.call(oldlyWed));
