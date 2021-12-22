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