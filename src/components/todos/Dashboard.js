import React from 'react'
import { CustomModal } from './CustomModal'
import { Navbar } from '../common/Navbar'
import { TodoContainer } from './TodoContainer'

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <TodoContainer />
      <CustomModal />
    </div>
  )
}
