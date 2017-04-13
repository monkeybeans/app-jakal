import StateBase from './StateBase';

export default class HistoryState extends StateBase {
  constructor(props, inheritance) {
    super(props, inheritance, HistoryState.TEMPLATE);
  }
}

HistoryState.TEMPLATE = ['winners'];
