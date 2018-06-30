/**
 * @author Gopakumar V 
 * @file description of file created
 */
import $ from "jquery";

export default class PrintLog {

    constructor(cntr) {
        cntr.empty();
        this._lineNo = 0;
        this._logCntr = $("<ul></ul>").addClass("console log").appendTo(cntr);
    }

    print(msg, section, sectionId) {
        msg = msg || "";
        ++this._lineNo;

        var line = $("<li></li>").addClass("line" + this._lineNo);
        if (section) {
            line.addClass("logSection");
            let sectionCntr;
            if (sectionId) {
                sectionCntr = this._logCntr.find("#" + sectionId);
            }

            if (!sectionCntr) {
                line.appendTo(this._logCntr);
                var sectionId = "section" + this._lineNo;
                sectionCntr = $("<ul></ul>").prop('id', sectionId).appendTo(line);
            }

            line = $("<li></li>").addClass("subline").appendTo(sectionCntr);
        } else {
            line.appendTo(this._logCntr);
        }
        
        line.append(msg);
        return section ? sectionId : "";
    }


}