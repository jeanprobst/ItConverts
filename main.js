// IDEAS TO IMPROVE THE CODE FOR THE FUTURE

/* wondering in a math relation among the category(kind). Probably, something like a matrix
of relational number. In this case, it would be separated by category(kind)...
for example, distance, space, speed, weight etc.

// DISTANCE

var meter = 1;
var centimeter = 100;
var kilometer = 1000;

// meter
var nova = 1200;

// kilometer
var nova1 = nova / kilometer

console.log(nova1)

*/


var kind = document.getElementById("kind").value;


function distance() {
    if (kind == "distance") {
        document.getElementById("distance").hidden = false
        document.getElementById("distance-out").hidden = false
        console.log("testOn-distance")
    } else {
        document.getElementById("distance").hidden = true
        document.getElementById("distance-out").hidden = true
    }
    }

function space() {
if (kind == "space") {
    document.getElementById("space").hidden = false
    document.getElementById("space-out").hidden = false
    console.log("testOn-space")
} else {
    document.getElementById("space").hidden = true
    document.getElementById("space-out").hidden = true
}
}

function speed() {
    if (kind == "speed") {
        document.getElementById("speed").hidden = false
        document.getElementById("speed-out").hidden = false
        console.log("testOn-speed")
    } else {
        document.getElementById("speed").hidden = true
        document.getElementById("speed-out").hidden = true
    }
    }

function weight() {
    if (kind == "weight") {
        document.getElementById("weight").hidden = false
        document.getElementById("weight-out").hidden = false
        console.log("testOn-weight")
    } else {
        document.getElementById("weight").hidden = true
        document.getElementById("weight-out").hidden = true
    }
    }

function temp() {
    if (kind == "temp") {
        document.getElementById("temp").hidden = false
        document.getElementById("temp-out").hidden = false
        console.log("testOn-temp")
    } else {
        document.getElementById("temp").hidden = true
        document.getElementById("temp-out").hidden = true
    }
    }

// function myFunction() {
//     space();
// }

function myFunction(input)
{
    kind = getValue();
    // alert(kind);
    distance();
    space();
    speed();
    weight();
    temp();
}

function getValue()
{
    var len = document.form1.kind.length;
    var chosen = "";

    for (var i = 0; i < len; i++) {
        if (document.form1.kind[i].selected) {
            chosen = document.form1.kind[i].value
        } 
    }

return chosen;
}

function myCalcInches(a) {
    const distance = document.getElementById("distance").value;
    if(distance == "milimeter") {

    const calc = a / 25.4

    console.log(calc.toFixed(2))

    document.getElementById("outcome-value").value = calc.toFixed(2);
    }
    else if(distance == "centimeter") {

        const calc = a / 2.54
    
        console.log(calc.toFixed(2))
    
        document.getElementById("outcome-value").value = calc.toFixed(2);
        }
        else if(distance == "meter") {

            const calc = a / 0.0254
        
            console.log(calc.toFixed(2))
        
            document.getElementById("outcome-value").value = calc.toFixed(2);
            }
            else if(distance == "kilometer") {

                const calc = a / 0.0000254
            
                console.log(calc.toFixed(2))
            
                document.getElementById("outcome-value").value = calc.toFixed(2);
                }
                else if(distance == "miles") {

                    const calc = a / 0.0000157828
                
                    console.log(calc.toFixed(2));
                
                    document.getElementById("outcome-value").value = calc.toFixed(0);
                    }
                    else if(distance == "inches") {

                        const calc = a
                    
                        console.log(calc.toFixed(2));
                    
                        document.getElementById("outcome-value").value = calc.toFixed(2);
                        }
                        else if(distance == "feet") {

                            const calc = a * 12
                        
                            console.log(calc.toFixed(2));
                        
                            document.getElementById("outcome-value").value = calc.toFixed(2);
                            }
                            else if(distance == "yards") {

                                const calc = a * 36
                            
                                console.log(calc.toFixed(2));
                            
                                document.getElementById("outcome-value").value = calc.toFixed(2);
                                }
                        
}

function myCalcFeet(a) {
    const distance = document.getElementById("distance").value;
    if(distance == "milimeter") {

    const calc = a / 304.8

    console.log(calc.toFixed(5))

    document.getElementById("outcome-value").value = calc.toFixed(5);
    }
    else if(distance == "centimeter") {

        const calc = a / 30.48
    
        console.log(calc.toFixed(2))
    
        document.getElementById("outcome-value").value = calc.toFixed(5);
        }
        else if(distance == "meter") {

            const calc = a * 3.281
        
            console.log(calc.toFixed(2))
        
            document.getElementById("outcome-value").value = calc.toFixed(3);
            }
            else if(distance == "kilometer") {

                const calc = a * 3281
            
                console.log(calc.toFixed(2))
            
                document.getElementById("outcome-value").value = calc.toFixed(2);
                }
                else if(distance == "miles") {

                    const calc = a * 5280
                
                    console.log(calc.toFixed(2));
                
                    document.getElementById("outcome-value").value = calc.toFixed(0);
                    }
                    else if(distance == "inches") {

                        const calc = a / 12
                    
                        console.log(calc.toFixed(2));
                    
                        document.getElementById("outcome-value").value = calc.toFixed(2);
                        }
                        else if(distance == "feet") {

                            const calc = a
                        
                            console.log(calc.toFixed(2));
                        
                            document.getElementById("outcome-value").value = calc.toFixed(2);
                            }
                            else if(distance == "yards") {

                                const calc = a * 3
                            
                                console.log(calc.toFixed(2));
                            
                                document.getElementById("outcome-value").value = calc.toFixed(2);
                                }
                        
}

/*

*/

function check() {
    var e = document.getElementById("distance-out").value;

    if(e === "inches") {
        myCalcInches(document.getElementById("entry-value").value);
    }
    else if(e === "feet") {
        myCalcFeet(document.getElementById("entry-value").value);
    }
}
