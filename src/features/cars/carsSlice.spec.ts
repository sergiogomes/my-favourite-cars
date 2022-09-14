import carsReducer, {
  CarsState,
  increment,
  decrement,
  incrementByAmount,
} from './carsSlice';

describe('cars reducer', () => {
  const initialState: CarsState = {
    value: [],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(carsReducer(undefined, { type: 'unknown' })).toEqual({
      value: [],
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = carsReducer(initialState, increment());
    expect(actual.value.length).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = carsReducer(initialState, decrement());
    expect(actual.value.length).toEqual(0);
  });

  it('should handle incrementByAmount', () => {
    const actual = carsReducer(initialState, incrementByAmount(2));
    expect(actual.value.length).toEqual(1);
  });
});
