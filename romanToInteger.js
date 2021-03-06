// Given a roman numeral, convert it to an integer.

const romanToInt = function(str) {
    const romanNumerals = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };
    
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        let currentNum = romanNumerals[str.charAt(i)];
        let nextNum = romanNumerals[str.charAt(i + 1)];
        
    if (nextNum) {
         if (currentNum >= nextNum) {
            sum += currentNum
             console.log(sum)
            } else {
                sum += (nextNum - currentNum);
                i++;
            }
        } else {
            sum += currentNum;
        }
    }
    return sum;
};

// 
