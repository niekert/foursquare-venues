const SPACING_FACTOR = 8;
function computeGoldenRatio(exp) {
  return Math.round(SPACING_FACTOR * 1.618 ** exp);
}

export default {
  bg: {
    main: '#F5F5F5',
    card: '#FFFFFF',
  },
  color: {
    active: '#4688F1',
    main: '#333',
    sub: '#444',
  },
  spacing: {
    0: `${computeGoldenRatio(0)}px`,
    1: `${computeGoldenRatio(1)}px`,
    2: `${computeGoldenRatio(2)}px`,
    3: `${computeGoldenRatio(3)}px`,
    4: `${computeGoldenRatio(4)}px`,
    5: `${computeGoldenRatio(5)}px`,
  },
  shadows: {
    0: '0 1px 2px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.15)',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
};
