import React from "react";
import { useDispatch, useSelector } from "react-redux";

const HomePage = () => {
    const balance = useSelector(state => state.balanceReducer.balance);
    const loan = useSelector(state => state.loanReducer.loan);
    const dispatch = useDispatch();

    const handleLoan = () => {
        dispatch({type: "APPLY"});
    };

    return(
        <>
            <h1>Home Page</h1>
            <h2>Balance: {balance}</h2>
            <h2>{ loan ? "Loan Approved" : "Loan Needed" }</h2>
            { !loan && <button onClick={handleLoan}>Apply</button> }
        </>
    );
};

export default HomePage;
