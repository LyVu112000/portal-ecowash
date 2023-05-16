import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'
import Loading from "../components/loading/Loading";
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    <main className="c-main">
      <CContainer fluid style={{width: "100%"}}>
        <Suspense fallback={loading}>
            {/*<div style={{position: "relative"}}>*/}
            {/*    <Loading*/}
            {/*        isLoading={true}*/}
            {/*    />*/}
            {/*</div>*/}
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (

                      <CFade>
                        <route.component {...props} />
                      </CFade>
                  
                  )} 
                />)
            })}
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
