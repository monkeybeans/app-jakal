import test from 'ava';
import StateBase from '../StateBase';

const TEMPLATE = {
  propTranslated: 'prop_translated',
  propFuncTranslated: function input_value(v) { return v; },
};

test('does not allow extra props', (t) => {
  base = new StateBase({ prop_translated: 'apa', input_value: 'banan' }, null, TEMPLATE);
  t.fail();
});

test('maps input to internal names', (t) => {
  t.fail();
});

test('uses inheritance from an other instance', (t) => {
  t.fail();
});
