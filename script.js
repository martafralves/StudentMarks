function printmarks(){
    let numSubs = parseInt(document.getElementById("numSubs").value);
    let marks;
    for(i=1; i<=numSubs;i=i+1){
        marks=prompt("Please enter your mark for subject "+i);
        document.getElementById("marks").innerHTML+="Subject number "+i+": "+marks+" marks<br>";
    }
}