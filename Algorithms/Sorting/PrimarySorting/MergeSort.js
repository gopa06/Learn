import PrintLogs from "../Utils/PrintLogs";
import $ from "jquery";
/**
 * @author Gopakumar V
 * @file Merge Sort
 */

let _mergeSort = {

    _printer: null,

    /**
     * Steps :-
     * 1. create an auxilary array.
     * 2. Do following checks
     *      a. if i crossed mid then copy right side to input array.
     *      b. if j crossed high thn copy left side to the input array.
     *      c. if i is less than j then copy ith item to the  input array.
     *      d. else copy jth element to the input array. 
     */
    _merge: function (a, low, mid, high) {
        var aux = this._createAuxilaryArray(a),
            i = low,
            j = mid + 1;

        this._printLog(`merge: [${a[low]} .. ${a[mid]} .. ${a[high]}]`);
        for (let k = low; k <= high; k++) {
            if (j > high) a[k] = aux[i++];
            else if (i > mid) a[k] = aux[j++];
            else if (aux[i] < aux[j]) a[k] = aux[i++];
            else a[k] = aux[j++];
        }
        this._printLog(`After merge: [${a}]`);
    },

    _createAuxilaryArray: function (arr) {
        return [...arr];
    },

    _sort: function (arr, low, high) {
        if (low >= high) return;
        this._printLog(`Sort: [${arr[low]} ... ${arr[high]}]`);
        var mid = Math.floor((high - low) / 2) + low;

        this._sort(arr, low, mid);
        this._sort(arr, mid + 1, high);
        this._merge(arr, low, mid, high);
    },

    _printLog: function (...args) {
        if (!this._printer) {
            this._printer = new PrintLogs($("div.outputCntr"));
        }
        this._printer.print(...args);
    },

    sort: function (arr) {
        this._printer = null;
        this._printLog(`<h4>Merge Sorting : ${arr}</h4>`);
        this._sort(arr, 0, arr.length - 1);
        this._printLog(`<h4>After sorting : ${arr}</h4>`);
        return arr;
    }
}

export default function MergeSort(arr) {
    _mergeSort.sort(arr);
}