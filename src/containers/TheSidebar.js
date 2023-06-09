import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'
import { changeLayout } from 'src/reducers/layoutReducer'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.layout.sidebarShow)

  return (
    <CSidebar
      show={show}
      onShowChange={(val) => dispatch(changeLayout({type: 'set', sidebarShow: val }))}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
      <CImg
      src="https://ecowash.net.vn/storage/logo-a-member-of-ebs-01.png"
      fluid
      className="c-sidebar-brand-full"
      style={{height: 55}}
    />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
