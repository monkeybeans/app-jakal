import StateBase from './StateBase';

export default class DynamicsState extends StateBase {
  static TEMPLATE = ['suggestions'];

  constructor(props, inheritance) {
    super(props, inheritance, DynamicsState.TEMPLATE);
  }
}
