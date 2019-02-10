import loggerMiddleware from './loggerMiddleware';

it('should pass the intercepted action to next', () => {
    const fakeStore = {};
    const fakeNext = jest.fn();

    const action = { type: 'INC' };
    loggerMiddleware(fakeStore)(fakeNext)(action);
    expect(fakeNext.mock.calls.length).toBe(1);
    expect(fakeNext.mock.calls[0][0]).toBe(action);

});
