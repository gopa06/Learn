import PrintLog from "./PrintLogs";

/**
 * @author Gopakumar V
 * @file description of file created
 */

 export default {
    
    /**
     * Math.random() will give random decimal less than 0.
     * (max - min + 1) is the range of values
     * i.e if min=5 and max=10. 6 values are possible {5,6,7,8,9,10}.
     * Math.floor(Math.random() * (max - min + 1)) will return values starting from 0. 
     * i.e if min = 5 and max = 10 then will return value between [0 - 6].
     * so add it min so we will get value ranging from [5-10]
     * 
     */
    getRandomNumber: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    swap: function(arr, i , j) {
        let msg = "";
        if(i != j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }else {
            msg = "No ";
        }
        
        return `${msg}Swap ${arr[j]} ${arr[i]}`;
    },

    shuffle: function(arr, cntr) {
        var printer = new PrintLog(cntr),
            printId = printer.print(`Start shuffle of ${arr}`, true, null);
        for(let j = 1; j < arr.length; j++){
            let msg = this.swap(arr,j, this.getRandomNumber(0,j));
            printer.print(msg, true, printId);
        }
        printer.print(`${arr}`, true, printId);
        return arr;
    }
 }