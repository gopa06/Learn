/**
 * @author Gopakumar V
 */

import $ from "jquery";
import "./css/style.css";
import allTestCases from "./Testcases";

let testcase = {
    algorithm: null,
    getTestcases: function () {
        var self = this,
            selectbox = $("select.testcaseList");
            
        $("<option value='' disabled selected>Select your option</option>").appendTo(selectbox);
        for (var name in allTestCases) {
            $("<option></option>")
                .text(name)
                .prop('value', name)
                .appendTo(selectbox);
        }
        selectbox.on("change", function() {
            var type = $(this).val();
            self.algorithm = allTestCases[type];
        });
        selectbox.val(name);
        this.algorithm = allTestCases[name];
    },
    createLayout: function () {
        var tmpl = $(`<div>
                            <div class="inputCntr" >
                                <select class="testcaseList" ></select>
                                <input type='text' value='7,6,3,2,1,4,5,8,9'/>
                                <button>Sort</button>
                            </div>
                            <div class="outputCntr" ></div>
                        </div>`);

        tmpl.on("click", "button", () => {
            let value = tmpl.find("input").get(0).value;
            if (value) {
                this.addData(value);
            }
        }).appendTo('body');
    },

    addData: function (data) {
        var inputArr = data.split(",").map(function(v) { return Number(v); });
        if(this.algorithm) {
            console.log(this.algorithm(inputArr));
        }
    },

    run: function () {
        $('body').empty();
        this.createLayout();
        this.getTestcases();
    }
};

testcase.run();