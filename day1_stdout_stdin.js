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

function ask(i) {
    process.stdout.write(`\n\n\n${questions[i]} `)
}

process.stdin.on("data", function(data){
    process.stdout.write(data.toString().trim());
})

ask(answers.length);