// standard Input and standard Output

process.stdout.write("Hello ")
// output --->   Hello 

// add two lines
process.stdout.write("Hello \n \n")

const questions = [
    "What is your name?",
    "What would you rather be doing",
    "What is your preferred programming language"
];

const answers = [];

function ask(i = 0) {
    process.stdout.write(`\n\n\n${questions[i]} :`)
}

ask();

process.stdin.on("data", function(data){
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();  // exit the process
    }
});
process.on("exit", function(){
    process.stdout.write("\n\n\n\n")
    process.stdout.write(`Your name ${answers[0]} now ${answers[1]} you interest @ ${answers[2]}`)
})
