function generateFrequencyList(textAreaText) {


    var iniText = "Apply Rx Levo Throxiane everyday. Take Threonine on empty stomach everyday." +
        " Apply Rx Nystatin Cream to lesions every 4 to 6 hours. Keep from scratching or other irritations. Also, keep areas well learned to prevent from spreading. Will Samuel for follow-up appointment in one week. If any questions or conditions worsen contact doctor immediately" +
        "I Rama Murthy, MD diagnosed Devi with borderline Myotonic MUSCULAR dystrophy (MMD). MMD is where muscles have difficulty relaxing and mild heart problems." +
        "55 year old male Caucasian with a history of diabetes mel­ litus and chronic renal insufficiency now with atrial fibrillation, rapid ventricular rate, congestive heart failure exacerbation and right leg cellulitis going to 10W telemetry unit. ";


    if (textAreaText) {
        iniText = textAreaText;
    }

    var inEle = iniText.split(" ");
    var freqObj = {};

    for (var i = 0; i < inEle.length; i++) {


        if (freqObj[inEle[i]] === undefined) {
            freqObj[inEle[i]] = 1;
        } else {
            var cc = freqObj[inEle[i]];
            cc++;
            freqObj[inEle[i]] = cc;
        }

    }

    var freqList = [];

    for (var key in freqObj) {
        if (freqObj.hasOwnProperty(key) && key != "") {
            freqList.push({"text": key, "size": freqObj[key] * 17.5});
        }
    }

    return freqList;
}
