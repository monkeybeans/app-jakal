const periodEnum =
[
  'SUGGEST',
  'VOTE',
  'DISPLAY',
]
.reduce(
  (a, c) => Object.assign({}, a, { [c]: c }), {},
);

export default periodEnum;
