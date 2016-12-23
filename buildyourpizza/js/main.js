/**
 * Created by Shikher on 13-Nov-16.
 */



var currentScreen = 1;

function linkClicked(e) {

    var target = (e.target) ? e.target : e.srcElement;
    var id = target.id;

    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var link1 = document.getElementById("sizeandcrust");
    var link2 = document.getElementById("cheeseandsauce");
    var link3 = document.getElementById("toppings");


    if (id === "sizeandcrust") {
        currentScreen = 1;
        tab1.style.display = "block";
        tab2.style.display = "none";
        tab3.style.display = "none";
        link1.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
        link2.style.background = "linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)";
        link3.style.background = "linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)";
    } else if (id === "cheeseandsauce") {
        currentScreen = 2;
        tab1.style.display = "none";
        tab2.style.display = "block";
        tab3.style.display = "none";
        link2.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
        link3.style.background = "linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)";
    } else if (id === "toppings") {
        currentScreen = 3;
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "block";
        link2.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
        link3.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
    }

}


function cancelClicked(form) {
    document.getElementById(form).reset();
    document.getElementById("sizeandcrust").click();
    currentScreen = 1;
}

function checkboxChange(e) {

    var sauceTypeBox = document.getElementById("sauceTypeBox");
    var cheeseTypeBox = document.getElementById("cheeseTypeBox");

    var id = e.target.id;

    if (id === "cheeseType") {
        if (e.target.checked) {
            cheeseTypeBox.style.visibility = "visible";
        } else {
            cheeseTypeBox.style.visibility = "hidden";
        }
    } else if (id === "sauceType") {
        if (e.target.checked) {
            sauceTypeBox.style.visibility = "visible";
        } else {
            sauceTypeBox.style.visibility = "hidden";
        }
    }

}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

function getCombinations(inputArray) {
    var result = [];
    var inputCopy = inputArray;
    var f = function (prefix, inputArray) {
        for (var i = 0; i < inputArray.length; i++) {
            if (prefix != "" && inputArray[i] != "" && contains(inputCopy, prefix)) {
                result.push(prefix + "||" + inputArray[i]);
            }
            f(prefix + inputArray[i], inputArray.slice(i + 1));

        }
    }
    f('', inputArray);
    return result;
}


function buildOrder() {

    if (currentScreen == 3) {

        var inputsArray = document.forms["pizzaForm"].getElementsByTagName("input");
        var checkedInputsArray = [];

        for (var i = 0; i < inputsArray.length; i++) {
            if (inputsArray[i].name === "meat-toppings-option" || inputsArray[i].name === "non-meat-toppings-option") {

                if (inputsArray[i].checked) {

                    var element = localStorage.getItem(inputsArray[i].value);

                    if (element === null) {
                        localStorage.setItem(inputsArray[i].value, "1");
                    } else {
                        var value = parseInt(element);
                        value++;
                        localStorage.setItem(inputsArray[i].value, value.toString());
                    }

                    checkedInputsArray.push(inputsArray[i].value);
                }
            }
        }

        //getting all combinations
        var result = getCombinations(checkedInputsArray);
        var sankeyDataObj = {weightArray: result};

        if (localStorage.getItem("sankeyDataObj") != null) {

            //get data from local storage
            var sankeyDataObjOld = JSON.parse(localStorage.getItem("sankeyDataObj"));

            var dataArray = sankeyDataObjOld.weightArray;

            for (var j = 0; j < dataArray.length; j++) {
                sankeyDataObj.weightArray.push(dataArray[j]);
            }
        }

        var finalObject = {};

        for (var k = 0; k < sankeyDataObj.weightArray.length; k++) {
            if (finalObject[sankeyDataObj.weightArray[k]] === undefined) {
                finalObject[sankeyDataObj.weightArray[k]] = 1;
            } else {
                var countFinalItem = finalObject[sankeyDataObj.weightArray[k]];
                countFinalItem++;
                finalObject[sankeyDataObj.weightArray[k]] = countFinalItem;
            }
        }

        localStorage.setItem("finalObject", JSON.stringify(finalObject));
        localStorage.setItem("sankeyDataObj", JSON.stringify(sankeyDataObj));
        return true;
    }

    currentScreen++;


    var tab1 = document.getElementById("tab1");
    var tab2 = document.getElementById("tab2");
    var tab3 = document.getElementById("tab3");
    var link2 = document.getElementById("cheeseandsauce");
    var link3 = document.getElementById("toppings");


    if (currentScreen === 2) {
        tab1.style.display = "none";
        tab2.style.display = "block";
        tab3.style.display = "none";
        link2.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
        link3.style.background = "linear-gradient(to bottom,  #1e5799 0%,#2989d8 50%,#207cca 51%,#7db9e8 100%)";
    } else if (currentScreen === 3) {
        tab1.style.display = "none";
        tab2.style.display = "none";
        tab3.style.display = "block";
        link3.style.background = "linear-gradient(to bottom, #f3c5bd 0%,#e86c57 50%,#ea2803 51%,#ff6600 75%,#c72200 100%)";
    }

    return false;
}

