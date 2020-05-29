import React, { Component } from 'react'
import { Dispatch, AnyAction, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { commonActions } from '../../store/actions/common.actions'
import { IAppState } from '../../store/reducers'

import Page from '../../layout/page'

import AddBttn from '../../components/Add'
import Calendar from '../../components/Calendar'
import Info from '../../components/Info'
import Intro from '../../components/Intro'
import Search from '../../components/Search'

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

class App extends Component<
    ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> {
    render() {
        return (
            <Page>
                <button onClick={this.props.toggle}>Toggle Button</button>
                {this.props.commonState.display ? (
                    <div>true</div>
                ) : (
                    <div>false</div>
                )}
                <div>
                    <div className="w-full">
                        <Intro />
                    </div>
                    <div className="w-full">
                        <Search />
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <Calendar />
                        </div>
                        <div className="w-1/2">
                            <div>
                                <Info />
                            </div>
                            <div>
                                <AddBttn />
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
