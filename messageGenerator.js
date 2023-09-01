//Pre-defined arrays for different parts of the message
const beginnings = ["Believe in yourself,", "Keep pushing,", "Never give up,"];
const middles = ["even when things are tough.", "as there's always light at the end of the tunnel.", "because you are closer than you think."];
const ends = ["You got this!", "Make it happen!", "Dreams come true!"];

// Function to generate a random index
function getRandomIndex(arr) {
    return Math.floor(Math.random() * arr.length);
}

// Function to generate a random message
function generateMessage() {
    const beginning = beginnings[getRandomIndex(beginnings)];
    const middle = middles[getRandomIndex(middles)];
    const end = ends[getRandomIndex(ends)];

    return `${beginning} ${middle} ${end}`;
}

// Output the random message to the console
console.log(generateMessage());