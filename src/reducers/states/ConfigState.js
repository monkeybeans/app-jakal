import StateBase from './StateBase';

export default class ConfigState extends StateBase {
  static TEMPLATE = ['votingAllowed', 'period', 'daysToNextPeriod', 'daysElapsedPeriod'];

  constructor(props, inheritance) {
    super(props, inheritance, ConfigState.TEMPLATE);
  }
}
