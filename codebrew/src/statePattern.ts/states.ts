import { CustomerDisplay } from "../Observer/types";
import { Order, StateType } from "./types";

export class Pending implements StateType {
  proceedToNextState(order: Order): void {
    console.log("order Moved Pending-> Preparing");
    order.state = new Preparing();
  }
  cancelOrder(order: Order): void {
    console.log("Order cancelled from pending");
    order.state = new Cancelled();
  }
}

export class Preparing implements StateType {
  proceedToNextState(order: Order): void {
    console.log("Order Moved Preparing-> Ready");
    order.state = new Ready();
  }
  cancelOrder(order: Order): void {
    console.log("Order cancelled from Preparing");
    order.state = new Cancelled();
  }
}

export class Ready implements StateType {
  proceedToNextState(order: Order): void {
    let customerDisplay = new CustomerDisplay()
    customerDisplay.update(order)
    console.log("Order Moved Ready -> Completed");
    order.state = new Completed();
    
  }
  cancelOrder(order: Order): void {
    console.log("Order cancelled from Ready");
    order.state = new Cancelled();
  }
}

export class Completed implements StateType {
  proceedToNextState(order: Order): void {
    console.log("Order is Delivered Successfully...");
  }
  cancelOrder(order: Order): void {
    console.log("Can't cancel an completed order");
  }
}

export class Cancelled implements StateType {
  proceedToNextState(order: Order): void {
    console.log("Can't proceed to next an cancelled order");
  }
  cancelOrder(order: Order): void {
    console.log("Order is already Cancelled");
  }
}
