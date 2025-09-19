import { Order, StateType } from "./types";

export class MainStateClass implements Order {
  state: StateType;
  constructor(state: StateType) {
    // super()
    this.state = state;
  }
  setState(state: StateType) {
    this.state = state;
  }
  processToNext(): void {
    this.state.proceedToNextState(this);
  }
  cancelOrder(): void {
    this.state.cancelOrder(this);
  }
}
