"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainStateClass = void 0;
class MainStateClass {
    constructor(state) {
        // super()
        this.state = state;
    }
    setState(state) {
        this.state = state;
    }
    processToNext() {
        this.state.proceedToNextState(this);
    }
    cancelOrder() {
        this.state.cancelOrder(this);
    }
}
exports.MainStateClass = MainStateClass;
