const actionEnum =
[
  'UPDATE_CONFIG',
  'UPDATE_DYNAMICS',
  'UPDATE_HISTORY',
  'VOTING_DONE',
  'TOGGLE_VOTING_RIGHT',
]
.reduce(
  (a, c) => Object.assign({}, a, { [c]: c }), {},
);

export default actionEnum;
