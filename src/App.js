import './App.css'

import React from 'react'
import Header from './Components/Header'
import Balance from './Components/Balance'
import IncomeExpense from './Components/IncomeExpense'
import TransactionList from './Components/TransactionList'
import AddTransaction from './Components/AddTransaction'

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  )
}

export default App
