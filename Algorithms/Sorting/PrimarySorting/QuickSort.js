/**
 * @author Gopakumar V
 * @file Quick Soring Algorithm
 */
import PrintLogs from "../Utils/PrintLogs";
import $ from "jquery";

let _quickSort = {

    _sort: function() {

    },

    _printer: null,

    _print: function(...args) {
        if(!this._printer) {
            this._printer = new PrintLogs($("div.outputCntr"));
        }
        this._printer.print(...args);
    },

    sort: function(arr) {
        this._print(`<h4>Quick Sort :: ${arr}</h4>`);
        
        return arr;
    }
}

export default function QuickSort(arr) {
    return _quickSort.sort(arr);
}