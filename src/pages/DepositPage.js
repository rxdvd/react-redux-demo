import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as balanceActions from "./../actions/balanceActions";

const DepositPage = () => {
    const balance = useSelector(state => state.balanceReducer.balance);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.balanceReducer.loading);

    const handleDeposit = () => {
        dispatch(balanceActions.depositAsync);
    };

    return(
        <>
            <h1>Deposit Page</h1>
            {
                loading ? 
                <h2>Making the deposit...</h2> :
                <h2>Balance: {balance}</h2>
            }
            <button onClick={handleDeposit} disabled={loading}>Deposit</button>
        </>
    );
};

export default DepositPage;
