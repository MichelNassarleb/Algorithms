//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
//or -1 if needle is not part of haystack.


// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.


export const findFirstOccurence =  (haystack, needle) =>{
    // Base condition
    if (haystack == null || needle == null) {
        return -1;
    }
    // Special case
    if (haystack === needle) {
        return 0;
    }
    // length of the needle
    const needleLength = needle.length
    const haystackLength = haystack.length
    // Loop over the length of hackstack minus needle's 
    for(let i = 0; i<   haystackLength - needleLength + 1;  i++){
        if(haystack.substring(i,needleLength) == needle){
            return i
        }
    }
    return -1
};