function runTwice(fn) {
    fn();
    fn();
}

// Example function to pass to runTwice
function sayamalaistheGOAT() {
    console.log("amalaistheGOAT");
}


runTwice(sayamalaistheGOAT);



