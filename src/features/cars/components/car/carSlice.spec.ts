import carsReducer from '../../carsSlice';

describe('cars reducer', () => {
  it('should handle initial state', () => {
    expect(carsReducer(undefined, { type: 'unknown' })).toEqual({
      list: [],
      status: 'idle',
    });
  });
});
