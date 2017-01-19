const actionEnum =
[
  'UPDATE_CONFIG',
  'UPDATE_DYNAMICS',
  'UPDATE_HISTORY',
]
.reduce(
  (a, c) => Object.assign({}, a, { [c]: c }), {},
);

export default actionEnum;
