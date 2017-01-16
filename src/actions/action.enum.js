const actionEnum =
[
  'UPDATE_CONFIG',
  'UPDATE_DYNAMICS',
  'UPDATE_HISTORY',
]
.reduce(
  (a, c, i) => Object.assign({}, a, { [c]: i }), {}
);

export default {
  actionEnum,
};
