/**
 * @author Gopakumar V
 * @file Red black tree.
 */

import {
    colors,
    RBNode
} from "../RedBlackTree/RBNode";
import Tree from "../Tree";

export default class RBTree extends Tree {

    insert(value) {
        var node = new RBNode(value);
        node.setColor(colors.RED);
        this._root = this._insertNode(this._root, node);
        this._handleVoilations(node);
    }

    _rotateRight(node) {
        console.log("Rotate Right -- " + node.getValue());
        var leftNode = node.getLeftNode(),
            temp = leftNode.getRightNode();

        node.setLeftNode(temp);
        if (node.getLeftNode() != null) {
            node.getLeftNode().setParent(node);
        }


        leftNode.setParent(node.getParent());
        if (node.getParent() == null) {
            this._root = leftNode;
        } else if (node.isEqual(node.getParent().getLeftNode())) {
            node.getParent().setLeftNode(leftNode);
        } else {
            node.getParent().setRightNode(leftNode);
        }

        leftNode.setRightNode(node);
        node.setParent(leftNode);

    }

    _rotateLeft(node) {

        console.log("Rotate Left -- " + node.getValue());
        var rightNode = node.getRightNode(),
            temp = rightNode.getLeftNode();

        node.setRightNode(temp);
        if (node.getRightNode() != null) {
            node.getRightNode().setParent(node);
        }

        var parentNode = node.getParent();
        rightNode.setParent(parentNode);
        if (parentNode == null) {
            this._root = rightNode;
        } else if (node.isEqual(parentNode.getLeftNode())) {
            parentNode.setLeftNode(rightNode);
        } else {
            parentNode.setRightNode(rightNode);
        }

        rightNode.setLeftNode(node);
        node.setParent(rightNode);
    }

    _isRed(node) {
        return node && node.getColor() === colors.RED;
    }

    _swapColors(node1, node2) {
        var temp = node1.getColor();
        node1.setColor(node2.getColor());
        node2.setColor(temp);
    }

    _handleVoilations(node) {
        while (!node.isEqual(this._root) && this._isRed(node) && this._isRed(node.getParent())) {
            let parentNode = node.getParent(),
                grandParentNode = parentNode.getParent();

            if (parentNode.isEqual(grandParentNode.getLeftNode())) {
                let uncle = grandParentNode.getRightNode();
                if (this._isRed(uncle)) {
                    uncle.setColor(colors.BLACK);
                    parentNode.setColor(colors.BLACK);
                    grandParentNode.setColor(colors.RED);
                    node = grandParentNode;
                } else {
                    if (node.isEqual(parentNode.getRightNode())) {
                        this._rotateLeft(parentNode);
                        node = parentNode;
                        parentNode = node.getParent();
                    }
                    this._rotateRight(grandParentNode);
                    this._swapColors(parentNode, grandParentNode);
                }
            } else {
                let uncle = grandParentNode.getLeftNode();
                if (this._isRed(uncle)) {
                    uncle.setColor(colors.BLACK);
                    parentNode.setColor(colors.BLACK);
                    grandParentNode.setColor(colors.RED);
                    node = grandParentNode;
                } else {
                    if (node.isEqual(parentNode.getLeftNode())) {
                        this._rotateRight(parentNode);
                        node = parentNode;
                        parentNode = node.getParent();
                    }
                    this._rotateLeft(grandParentNode);
                    this._swapColors(parentNode, grandParentNode);
                    node = parentNode;
                }
            }
        }

        if (this._isRed(this._root)) {
            this._root.setColor(colors.BLACK);
        }
    }

    _insertNode(node, newNode) {

        if (node == null) {
            return newNode;
        }

        if (newNode.getValue() < node.getValue()) {
            node.setLeftNode(this._insertNode(node.getLeftNode(), newNode));
            node.getLeftNode().setParent(node);
        } else {
            node.setRightNode(this._insertNode(node.getRightNode(), newNode));
            node.getRightNode().setParent(node);
        }

        return node;
    }
}