import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { ICar } from '../../interfaces/ICar';
import carsReducer, { addCarAsync, CarsState } from './carsSlice';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

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

  it('should dispatch the add car async action', () => {
    const expectedActions = [
      {
        meta: {
          arg: {
            brand: 'VW',
            horsepower: 120,
            id: 0,
            name: 'Gol',
          },
          requestId: '',
          requestStatus: 'pending',
        },
        type: 'cars/addCar/pending',
        payload: undefined 
      }
    ]

    const store = mockStore({ initialState })
    const car: ICar = {
      id: 0,
      name: 'Gol',
      brand: 'VW',
      horsepower: 120
    }
    store.dispatch<any>(addCarAsync(car))

    const actions = store.getActions();
    const { requestId } = actions[0].meta
    expectedActions[0].meta.requestId = requestId

    expect(store.getActions()).toEqual(expectedActions)
  });
});
