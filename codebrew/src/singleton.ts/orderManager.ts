import { Coffee } from "../decorator/types";
import { Payment } from "../payment/paymentStrategy";
import { CreditCardPayment } from "../payment/strategies";
import { MainStateClass } from "../statePattern.ts/mainClass";
import { Pending } from "../statePattern.ts/states";
// import { Order } from "../statePattern.ts/types";

export class OrderManager{
    allOrders :Coffee[] = []
    putOrder(coffee:Coffee){
        console.log("Order Received")
        this.allOrders.push(coffee)
        this.makeAllOrders();
        this.makePayments();
    }
    makeAllOrders():void{
        for(let coffee of this.allOrders){
            let coffee = new MainStateClass(new Pending())
            coffee.processToNext()
        }
    }
    makePayments():void{
        for(let coffee of this.allOrders){
            let myPayment = new Payment(new CreditCardPayment())
            myPayment.processPayment(coffee.getCost())
        }
    }
}