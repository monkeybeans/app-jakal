export default class HistoryState {
  constructor(props) {
    if (typeof props === 'object') {
      this.winners = props.winners;
    }
  }
}
