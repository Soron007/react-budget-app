import React from 'react';

const Transaction = (props) => {

    const sign = props.transaction.amount < 0 ? '-' : '+';
    return (
        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign}Rs{Math.abs(props.transaction.amount)}
            </span><button className='delete-btn'>x</button>
        </li>
    )
}

export default Transaction;
