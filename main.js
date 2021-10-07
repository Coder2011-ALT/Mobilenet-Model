Webcam.set({
    width: 310,
    height: 300,
    image_format: 'png',
    png_Quality: '90',

    constraints: {
        facingMode: "enviroment"
    }
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    console.log("Taking snapshot...");
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='captured_image' src='" + data_uri + "'>";
    });
    console.log("Snapshot Taken!");
}

function modelLoaded() {
    console.log('Model Loaded!');
}

console.log("ml5 version: ", ml5.version);

classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function check() {
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("object_name").innerHTMl = results[0].label;
    }
}
