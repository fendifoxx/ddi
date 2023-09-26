function isPalindrome(word) {
    // Convert the word to lowercase to handle case-insensitivity
    word = word.toLowerCase();
    
    // Function to check if a single word or an empty string is a palindrome
    function isSingleCharOrEmpty(str) {
        return str.length <= 1;
    }
    
    // Helper function to check if two characters are equal
    function areEqualChars(char1, char2) {
        return char1 === char2;
    }

    // Base case: Check if the word is a single character or empty
    if (isSingleCharOrEmpty(word)) {
        return true;
    }

    // Compare the characters at the beginning and end of the word
    if (areEqualChars(word[0], word[word.length - 1])) {
        // If equal, continue checking the rest of the word
        return isPalindrome(word.slice(1, -1));
    } else {
        // If different, it's not a palindrome
        return false;
    }
}

// Example usage:
const testWord = "racecar";
if (isPalindrome(testWord)) {
    console.log(testWord + " is a palindrome.");
} else {
    console.log(testWord + " is not a palindrome.");
}
