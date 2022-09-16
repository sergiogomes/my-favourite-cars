import sideBarReducer, {
  SideBarState,
  toggle,
} from './sideBarSlice';

describe('sideBar reducer', () => {
  const initialState: SideBarState = {
    visible: 'off',
  };

  it('should handle initial state', () => {
    expect(sideBarReducer(undefined, { type: 'unknown' })).toEqual({
      visible: 'off',
    });
  });

  it('should toggle the visibility', () => {
    const actual = sideBarReducer(initialState, toggle());
    expect(actual.visible).toBe('on');
  });

  it('should toggle the visibility again', () => {
    const state = sideBarReducer(initialState, toggle());
    const actual = sideBarReducer(state, toggle());
    expect(actual.visible).toBe('off');
  });
});
