import test from 'ava';
import StateBase from '../../src/reducers/states/StateBase';

const TEMPLATE = [
  'propOne', 'propTwo',
];

test('allows props that are registred', (t) => {
  const base = new StateBase({ propOne: 'apa', propTwo: 'banan', propNotInTemplate: 'should be omitted' }, undefined, TEMPLATE);

  t.truthy(base.propNotInTemplate === undefined);
});


test('does not allow extra props', (t) => {
  const base = new StateBase({ propOne: 'apa', propTwo: 'banan', propNotInTemplate: 'should be omitted' }, undefined, TEMPLATE);

  t.truthy(base.propNotInTemplate === undefined);
});

test('allows an inheritance', (t) => {
  const base = new StateBase({ propOne: 'banan' }, undefined, TEMPLATE);
  const base2 = new StateBase({ propTwo: 'apa' }, base, TEMPLATE);

  t.truthy(base2.propOne === 'banan');
  t.truthy(base2.propTwo === 'apa');
});
