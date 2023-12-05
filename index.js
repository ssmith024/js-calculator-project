// function to process the array of numbers
function processArray(numbers) {
    let newArray = [];
    let total = 0;

    for(let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] >= numbers[i + 1]) {
            newArray.push(numbers[i]);
        }
    }
    newArray.push(numbers[numbers.length- 1]);

    for (let num of newArray) {
        total += num;
    }

    return total;
}

//main function to start the program
function startProgram() {
    alert("Welcome to the Simple Calculator by JavaScript");

    let name = prompt("Please enter your name:");
    alert (`Welcome ${name}!`);

    while (true) {
        let numberInput = prompt("Enter a list of numbers seperated by a comma or space:");

        if (numberInput !== null) {
            let numbers = numberInput.split(/[,\s]+/).map(Number);
            let total = processArray(numbers);

            alert(`Hello ${name}! The sum of the numbers is ${total}`);

            if (total > 50) {
                alert("That is a big number.");
            }else{
                alert("That is a small number.");
            }

            let choice = prompt("Do you want to continue adding numbers? (yes or no)");

            if (choice.toLowerCase() !== 'yes') {
                alert("Thank you for using this program");
                break;
            }
        } else {
            alert("Thank you for using this program");
            break;
        }
    }
}
//start the program
startProgram(); 
