import { Coffee } from "../decorator/types";
import { Order } from "../statePattern.ts/types";

export class OrderManager{
    allOrders :Coffee[] = []
    putOrder(coffee:Coffee){
        this.allOrders.push(coffee)
    }
    
}