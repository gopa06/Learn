/**
 * @author Gopakumar V
 * @file Quick Soring Algorithm
 */
import PrintLogs from "../Utils/PrintLogs";
import $ from "jquery";
import Shuffle from "../Utils/Shuffle";

let _quickSort = {

    _swap: function (a, i, j) {
        this._print(`Swap ${a[i]} - ${a[j]}`);
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    },

    _printer: null,

    _print: function (...args) {
        if (!this._printer) {
            this._printer = new PrintLogs($("div.outputCntr"));
        }
        this._printer.print(...args);
    },

    _partition: function (a, low, high) {
        var sessionId = this._print(` -- > ${a}`, true, null);
        var i = low,
            j = high + 1;

        while(true) {
            while(a[++i] < a[low]){
                if(i == high) break;
            }
            while(a[--j] > a[low]) {
                if(j == low) break;
            }
            if(i >= j) break;
            this._swap(a, i, j);
            this._print(` -- > ${a}`, true, sessionId);
        }

        this._swap(a, low, j);
        this._print(` -- > ${a}`, true, sessionId);
        return j;
    },

    _sort: function (arr, low, high) {
        
        if(low >= high) return;

        this._print(`<hr/>Sort :: ${low} ${high}  -- [${arr[low]} ... ${arr[high]}]`);

        var j = this._partition(arr, low, high);
        this._sort(arr, low, j-1);
        this._sort(arr, j+1, high);
    },

    sort: function (arr) {
        this._printer = null;
        this._print(`<h4>Quick Sort :: ${arr}</h4>`);
        Shuffle.shuffle(arr, $("div.outputCntr"));
        this._print(`<h4>Shuffle :: ${arr}</h4>`);
        this._sort(arr, 0, arr.length -1);
        this._print(`<h4>After Sort :: ${arr}</h4>`);
        return arr;
    }
}

export default function QuickSort(arr) {
    return _quickSort.sort(arr);
}