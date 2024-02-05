import React from 'react'
import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
import Header from '../header'
import Wrapper from '../page-wrapper'

const MainLayout = props => {
  return (
    <Wrapper >
        <Header />
        <Outlet />
    </Wrapper>
  )
}

MainLayout.propTypes = {}

export default MainLayout