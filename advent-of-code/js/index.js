const fs = require('fs');
const path = require('path');

const readInput = async inputPath => {
  let fileContents;
  const fullPath = path.resolve(__dirname, `../input/${inputPath}`);
  return fs.readFileSync(fullPath, 'utf8', (err, data) => {
    if (!err) {
      return data;
    }
  });
};

const day7 = () => {
  const input = readInput('day7_2015.txt');
  const wires = {};
  // FIXME: make a generic logic function with eval and call that instead.
  const ops = {
    NOT: a => a ^ 65535,
    OR: (a, b) => a | b,
    AND: (a, b) => a & b,
    RSHIFT: (a, b) => a >> b,
    LSHIFT: (a, b) => a << b
  };
  input
    .then(x => {
      const lines = x
        .split('\n')
        .sort((a, b) => a.length - b.length)
        .sort((a, b) => (/\d+/.test(a[0]) ? 1 : /\d+/.test(b[0]) ? -1 : 0));
      //   console.log(lines);
      lines.forEach(y => {
        console.log(y);
        const op = y.split(' ');
        // Check for not op first since it's signature is different.
        if (op.indexOf('NOT') !== -1) {
          // Do the not op.
          wires[op[op.length - 1]] = ops.NOT(
            /\d+/.test(op[op.indexOf('NOT') + 1])
              ? op[op.indexOf('NOT') + 1]
              : wires[op[op.indexOf('NOT') + 1]]
          );
        } else if (op.length === 3) {
          if (/\d+/.test(op[0])) {
            wires[op[2]] = Number.parseInt(op[0]);
          } else {
            wires[op[2]] = wires[op[0]];
          }
        } else {
          wires[op[op.length - 1]] = ops[op[1]](
            /\d+/.test(op[0]) ? op[0] : wires[op[0]],
            /\d+/.test(op[2]) ? op[2] : wires[op[2]]
          );
        }
      });
      //   console.log(wires);
    })
    .catch(y => {
      console.log(y);
    });
};

module.exports = {
  day7
};
