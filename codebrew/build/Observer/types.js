"use strict";
// The Order class should be the "Subject" (or Observable).
// Create an "Observer" interface and a concrete CustomerDisplay observer.
// Use the Observer Pattern so that when an Order's state changes to Ready, it automatically notifies the CustomerDisplay observer.
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDisplay = void 0;
class CustomerDisplay {
    update(order) {
        console.log(`${order} is Ready`);
    }
}
exports.CustomerDisplay = CustomerDisplay;
