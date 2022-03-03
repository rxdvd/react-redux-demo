import React from "react";
import { useSelector, useDispatch } from "react-redux";

const WithdrawPage = () => {
    const balance = useSelector(state => state.balanceReducer.balance);
    const dispatch = useDispatch();

    const handleWithdraw = () => {
        dispatch({type: "WITHDRAW", payload: 200});
    };

    return(
        <>
            <h1>Withdraw Page</h1>
            <h2>Balance: {balance}</h2>
            <button onClick={handleWithdraw}>Withdraw</button>
        </>
    );
};

export default WithdrawPage;
