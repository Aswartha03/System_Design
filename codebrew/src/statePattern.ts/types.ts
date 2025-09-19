export interface Order{
    state : StateType
}

export interface StateType{
    proceedToNextState(order:Order) :void 
    cancelOrder(order:Order) : void
}