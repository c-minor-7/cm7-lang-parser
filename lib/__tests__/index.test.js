jest.mock('../Parser.js');

const Cm7Parser = require('../index');
const Parser = require('../Parser');

describe('Cm7Parser', () => {
  it('should return a new Parser', () => {
    const cm7Parser = Cm7Parser();
    expect(Parser).toHaveBeenCalledTimes(1);
    expect(cm7Parser).toBe(Parser.mock.instances[0]);
  });

  it('should pass in all args to Parser', () => {
    Cm7Parser(1, 2, 3);
    expect(Parser).toHaveBeenCalledWith(1, 2, 3);

    Cm7Parser({
      x: 3,
      y: 0,
    });
    expect(Parser).toHaveBeenCalledWith({
      x: 3,
      y: 0,
    });
  });
});
