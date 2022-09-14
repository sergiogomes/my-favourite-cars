import carsReducer, {
  CarsState,
  increment,
  decrement,
  incrementByAmount,
} from './carsSlice';

describe('cars reducer', () => {
  const initialState: CarsState = {
    list: [],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(carsReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      status: 'idle',
    });
  });

  it('should handle increment', () => {
    const actual = carsReducer(initialState, increment());
    expect(actual.list.length).toEqual(1);
  });

  it('should handle decrement', () => {
    const actual = carsReducer(initialState, decrement());
    expect(actual.list.length).toEqual(0);
  });

  it('should handle incrementByAmount', () => {
    const actual = carsReducer(
      initialState,
      incrementByAmount({
        id: 0,
        name: 'Gol',
        brand: 'Volkswagen',
        hp: 165,
      }),
    );
    expect(actual.list.length).toEqual(1);
  });
});
