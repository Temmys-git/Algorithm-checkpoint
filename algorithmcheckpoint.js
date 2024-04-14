// write an algorithm (pseudocode) that read a sentence, which ends with a point, character by character, and to determine:

 


// Instructions

// The length of the sentence (the number of characters).
// The number of words in the sentence (assuming that the words are separated by a single space).
// The number of vowels in the sentence.
// You have to keep in mind that: 

// Each character will be treated separately.
// The last character is the point.
// Use three variables as counters.




/ Initialize three counters: sentenceLength, wordCount, vowelCount, all set to 0.

Read the input sentence character by character until the point is encountered:
    Increment sentenceLength by 1.
    If the current character is a vowel (a, e, i, o, u or their uppercase variants):
        Increment vowelCount by 1.
    If the current character is a space:
        Increment wordCount by 1.

Increment wordCount by 1 (for the last word).

Output sentenceLength, wordCount, and vowelCount.
Pseudocode:

vbnet
Copy code
Initialize sentenceLength, wordCount, vowelCount as 0

Read input sentence character by character until point is encountered:
    Increment sentenceLength by 1
    If current character is a vowel:
        Increment vowelCount by 1
    If current character is a space:
        Increment wordCount by 1

Increment wordCount by 1

Output sentenceLength, wordCount, vowelCount





