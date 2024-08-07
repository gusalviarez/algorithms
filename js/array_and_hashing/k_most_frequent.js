const name1 = "create an obj with frequencies"

const kMostFrequent = function(nums, k) {
    // Frequency counter
    let freqs = {};


    // iterate nums, if is a new num them create 1 if not then add 1
    for (num of nums) {
        if (freqs[num] === undefined) { 
            freqs[num] = 1;
        } else {
            freqs[num] = freqs[num] + 1;
        }
    }
    
    // Convert to array with [frequency, number] elements
    let frequencyArray = [];
    for (key in freqs) {
        frequencyArray.push([freqs[key], key]);
    }
    
    // Sort in descending order with frequency as key
    frequencyArray.sort((a, b) => {
        return b[0] - a[0];
    });
    
    // Get most frequent element out of array
    mostFreq = [];
    for (let i = 0; i < k; i++) {
        mostFreq.push(frequencyArray[i][1]);
    }
    return mostFreq;
};

k = 2
nums = [1,1,2,2,2,3,4,4,4]

console.time(name1)
console.log(kMostFrequent(nums, k))
console.timeEnd(name1)
