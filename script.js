

// 1. English Section:
$(".englishButton").click(function(){
    var englishInput = $(".english").val();
        if(englishInput === "Mon"){
            $(".englishMessage").text("Correct!");
        
        } else {
    // display this text if the answer is incorrect
    $(".englishMessage").text("Wrong! Try again."); 
        }
});


// 2. Social Studies section
$(".ssButton").click(function(){
    var ssInput = $(".socialStudies").val();
    if(ssInput === "Albany"){
        $(".ssMessage").text("correct!");
    
    } else {
        $(".ssMessage").text("Wrong! Try again.");
    }
        
        

    
});


// 3. Math section
$(".mathButton").click(function(){
    var mathInput = $(".math").val();
    
    // below, we are using the parseInt() function to convert the input value (a string) into a number
    var mathInput = parseInt(mathInput);
console.log(mathInput);
if(mathInput === 30){
    $(".mathMessage").text("correct");
} else {
    $(".scienceMessage").yexy("Wromg! Try Again");
}
});


// 4. Science section

$(".scienceButton").click(function(){
    var scienceInput = $(".science").val();
    if(scienceInput === "solid"){
        $(".scienceMessage").text("correct!");

} else {
    $(".scienceMessage").text("Wrong! Try again");
}
});




