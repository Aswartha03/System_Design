// The Order class should be the "Subject" (or Observable).
// Create an "Observer" interface and a concrete CustomerDisplay observer.
// Use the Observer Pattern so that when an Order's state changes to Ready, it automatically notifies the CustomerDisplay observer.

import { Order } from "../statePattern.ts/types";

export interface Observer{
    update(order:Order):void
}

export class CustomerDisplay implements Observer{
    update(order:Order): void {
        console.log(`${order} is Ready`);
    }
}