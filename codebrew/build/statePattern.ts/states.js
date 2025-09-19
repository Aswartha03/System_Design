"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cancelled = exports.Completed = exports.Ready = exports.Preparing = exports.Pending = void 0;
class Pending {
    proceedToNextState(order) {
        console.log("order Moved Pending-> Preparing");
        order.state = new Preparing();
    }
    cancelOrder(order) {
        console.log("Order cancelled from pending");
        order.state = new Cancelled();
    }
}
exports.Pending = Pending;
class Preparing {
    proceedToNextState(order) {
        console.log("Order Moved Preparing-> Ready");
        order.state = new Ready();
    }
    cancelOrder(order) {
        console.log("Order cancelled from Preparing");
        order.state = new Cancelled();
    }
}
exports.Preparing = Preparing;
class Ready {
    proceedToNextState(order) {
        console.log("Order Moved Ready -> Completed");
        order.state = new Completed();
    }
    cancelOrder(order) {
        console.log("Order cancelled from Ready");
        order.state = new Cancelled();
    }
}
exports.Ready = Ready;
class Completed {
    proceedToNextState(order) {
        console.log("Order is Delivered Successfully...");
    }
    cancelOrder(order) {
        console.log("Can't cancel an completed order");
    }
}
exports.Completed = Completed;
class Cancelled {
    proceedToNextState(order) {
        console.log("Can't proceed to next an cancelled order");
    }
    cancelOrder(order) {
        console.log("Order is already Cancelled");
    }
}
exports.Cancelled = Cancelled;
