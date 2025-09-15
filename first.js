function countVowls(str) {
    let count = 0;
    for (const char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
}
