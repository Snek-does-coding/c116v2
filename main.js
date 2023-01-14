 function classify()
 {
    navigator.mediaDevices.getUserMedia({ auto: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uTR7XvOXp/model.json', modelReady);
 }
 


 function modelReady()
 {
    classifier.classify(gotResults);
 }