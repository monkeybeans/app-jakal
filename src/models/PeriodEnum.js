const periodEnum =
[
  'SUGGEST',
  'VOTE',
  'DISPLAY',
]
.reduce(
  (a, c, i) => Object.assign({}, a, { [c]: i }), {},
);

export default periodEnum;
