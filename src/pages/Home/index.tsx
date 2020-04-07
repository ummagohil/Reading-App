import React from 'react'
import { Link } from 'react-router-dom'

import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { commonActions } from '../../store/actions/common.actions'
import { IAppState } from '../../store/reducers'

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      toggle: () => commonActions.toggle(),
    },
    dispatch
  )

const mapStateToProps = (state: IAppState): IAppState => {
  return {
    commonState: state.commonState,
  }
}

class App extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.toggle}>Toggle Button</button>
        {this.props.commonState.display ? <div>true</div> : <div>false</div>}
        <h2>
          <Link to="/">Home</Link>
        </h2>
        <h2>
          <Link to="/Add">Add</Link>
        </h2>
        <h2>
          <Link to="/Edit">Edit</Link>
        </h2>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
