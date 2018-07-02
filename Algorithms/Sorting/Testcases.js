import * as elementarySortAlgo from "./ElementarySort/BasicSortingAlgos";
import MergeSort from "./PrimarySorting/MergeSort";
import QuickSort from "./PrimarySorting/QuickSort";
export default {
    "Selection Sort" : elementarySortAlgo.selectionSort,
    "Insertion Sort" : elementarySortAlgo.insertionSort,
    "Bubble Sort" : elementarySortAlgo.bubbleSort,
    "Merge Sort" : MergeSort,
    "Quick Sort" : QuickSort,
    "Shuffle" : elementarySortAlgo.shuffle
};
