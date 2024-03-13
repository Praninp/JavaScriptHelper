let generatedNumbers = [];
export const JavaScriptHelper = {
    getRandomNumber(min, max) {
        let randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (generatedNumbers.includes(randomNumber));

        generatedNumbers.push(randomNumber);
        return randomNumber;
    },

    generateFibonacciInRange(maxValue) {
        let fibonacciSeries = [];
        let a = 0, b = 1;
        let nextFibonacci = a + b;

        while (nextFibonacci <= maxValue) {
            fibonacciSeries.push(nextFibonacci);
            a = b;
            b = nextFibonacci;
            nextFibonacci = a + b;
        }

        return fibonacciSeries;
    },

    getTruncatedDescription(desc, maxLength) {
        if (desc.length <= maxLength) {
            return desc;
        }

        const truncated = desc.substring(0, maxLength - 3);
        return truncated + '...';
    },

    reverseString(sentence) {
        return sentence.split("").reverse().join("");
    },

    removeDuplicateElement(srcArray) {
        let resultArray =[];
        srcArray.forEach(element => {
            if(resultArray.indexOf(element) === -1) {
                resultArray.push(element);
            }
        });
        return resultArray;
    },

    sortArray(srcArray, key) {
        let result = srcArray.sort(function (a, b) {
            return b[key] - a[key];
        });
        return result
    },

    swapArray(firstArray, secondArray) {
        let secArrayCount = secondArray.length;
        firstArray.forEach(ele => {
            secondArray.push(ele);
        });
        firstArray = secondArray.splice(0, secArrayCount);
        return [firstArray, secondArray]
    }
};