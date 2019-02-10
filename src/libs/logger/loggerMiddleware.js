const loggerMiddleware = () => next => action => {
    if (action.hasOwnProperty('type')) {
        localStorage.setItem(`${Date.now()}`, JSON.stringify(action));
    }

    next(action);
};

export default loggerMiddleware;
