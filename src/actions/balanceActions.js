const loading = { type: "LOADING" };

const deposit = {type: "DEPOSIT", payload: 200};

const depositAsync = dispatch => {
    dispatch(loading);
    setTimeout(() => {
        dispatch(deposit);
    }, 2000);
};

export {deposit, depositAsync, loading};
