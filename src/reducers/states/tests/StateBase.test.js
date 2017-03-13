import test from 'ava';
import StateBase from '../StateBase';

let base;

test.before(() => {
  const TEMPLATE = {
    propTranslated: 'prop_translated',
    propFuncTranslated: function input_value(v) { return v; },
  };

  base = new StateBase({}, null, TEMPLATE);
});

test.after(() => {
  base = null;
});

test('does not allow extra props', (t) => {
  t.fail();
});

test('maps input to internal names', (t) => {
  t.fail();
});

test('uses inheritance from an other instance', (t) => {
  t.fail();
});
