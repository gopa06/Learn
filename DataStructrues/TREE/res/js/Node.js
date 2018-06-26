/**
 * @author Gopakumar V
 * @file Node Model
 */

let nodeId = 0;
export default class Node {

    constructor(value) {
        this._id = "node_"+(++nodeId);
        this._value = value;
        this._properties = new Map();
    }

    setProperty(key, value){
        this._properties.set(key, value);
    }

    getProperty(key) {
        return this._properties.get(key);
    }

    getValue() {
        return this._value;
    }

    setValue(value) {
        this._value = value;
    }

    isEqual(node) {
        return node && this._id == node._id;
    }

    toJson() {
        return {
            value : this._value,
            properties : this._properties
        };
    }
}
