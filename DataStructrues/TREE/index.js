import './res/css/style.css';
import allTestCases from "./res/js/TestCases";


var selectbox = $("<select></select>").addClass("testcaseList").appendTo($('body'));
$("<option value='' disabled selected>Select your option</option>").appendTo(selectbox);

console.log(allTestCases);
for (var name in allTestCases) {
    $("<option></option>")
        .text(name)
        .prop('value', name)
        .appendTo(selectbox);
}

selectbox.on("change", function (el) {
    var type = $(this).val(),
        cntr = $(".mainContainer");
    cntr.empty();
    new allTestCases[type](cntr);
});