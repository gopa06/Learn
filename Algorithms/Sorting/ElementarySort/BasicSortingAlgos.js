/**
 * @author Gopakumar V
 * @file Selection Sort
 */
import $ from "jquery";
import PrintLog from "../Utils/PrintLogs";

let elementarySortAlgo = {

    getPrinter: function (cntr) {
        return new PrintLog(cntr);
    },

    printLog: function (msg, config) {
        var container = $("div.console.log");
        if (container) {
            if (config) {
                if (config.begining)
                    $("<li></li>").prependTo(container).text(msg);
            } else {
                $("<li></li>").appendTo(container).text(msg);
            }
        }
    },

    swap: function (arr, i, j, printer) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

        return `swap ${arr[i]} ${arr[j]}`;
    },

    selectionSort: function (input) {
        var printer = this.getPrinter($("div.outputCntr"));
        printer.print(`<h4>Selection Sort :: ${input}</h4>`);
        for (let i = 0; i < input.length; i++) {
            let printSectionId = null,
                least = input[i],
                index = null;
            printSectionId = printer.print(`Interation ${i}<hr/>`, true, printSectionId);
            for (let j = i + 1; j < input.length; j++) {
                if (input[j] < least) {
                    least = input[j];
                    index = j;
                }
            }
            if (index != null) {
                let msg = this.swap(input, i, index, printer);
                printer.print(msg, true, printSectionId);
                printer.print(`${input}`, true, printSectionId);
            } else {
                printer.print(`No swap for ${least}`, true, printSectionId);
            }
        }
        printer.print(`<h4>After sort : ${input}</h4>`);
        return input;
    },

    insertionSort: function (input) {
        var printer = this.getPrinter($("div.outputCntr"));
        printer.print(`<h4>Insertion Sort :: ${input}</h4>`);
        for (let i = 1; i < input.length - 1; i++) {
            let printSectionId = null;
            printSectionId = printer.print(`Iteration ${i}`, true, printSectionId);
            for (let j = i; j > 0; j--) {
                printer.print(`<hr/>compare ${input[j]} ${input[j-1]}`, true, printSectionId);
                if (input[j] < input[j - 1]) {
                    var swapMsg = this.swap(input, j, j - 1);
                    printer.print(swapMsg, true, printSectionId);
                    printer.print(`${input}`, true, printSectionId);
                }
                
            }
        }

        printer.print(`After Sorting :: ${input}`);
        return input;
    },

    bubbleSort: function (input) {
        var printer = this.getPrinter($("div.outputCntr"));
        printer.print(`<h4>Bubble Sort ${input}</h4>`);
        for (let i = 0; i < input.length; i++) {
            let printSectionId = null;
            printSectionId = printer.print(`<b>Iteration ${i}</b>`, true, printSectionId);
            for (let j = 0; j < input.length - (i + 1); j++) {
                printer.print(`<hr/>compare ${input[j]} ${input[j+1]}`, true, printSectionId);
                if (input[j] > input[j + 1]) {
                    let msg = this.swap(input, j, j + 1);
                    printer.print(msg, true, printSectionId);
                    printer.print(`${input}`, true, printSectionId);
                }
            }
        }

        printer.print(`<h4>After Sorting :: ${input}</h4>`);
        return input;
    }
};

export function selectionSort(value) {
    elementarySortAlgo.selectionSort(value);
};

export function insertionSort(value) {
    elementarySortAlgo.insertionSort(value);
};

export function bubbleSort(value) {
    elementarySortAlgo.bubbleSort(value);
};