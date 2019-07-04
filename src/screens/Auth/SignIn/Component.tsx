import * as React from 'react'

import { Buttons, Page, Title, TitleContainer } from './stylesComponents'

import { NavigationInjectedProps } from 'react-navigation'

import { LoginButton } from 'react-native-fbsdk'

export interface Props {}

export interface Dispatch {
  onLoginFinished: (nav) => void
}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  constructor(props) {
    super(props)
  }

  public render() {
    const loginButton = {
      onLoginFinished: this.onLoginFinished,
      onLogoutFinished: this.onLogoutFinished,
    }

    return (
      <Page>
        <TitleContainer>
          <Title>SIGN IN</Title>
        </TitleContainer>

        <Buttons>
          <LoginButton {...loginButton} />
        </Buttons>
      </Page>
    )
  }

  private onLoginFinished = (error, result) => {
    if (error) {
      console.log('login has error: ' + result.error)
    } else if (result.isCancelled) {
      console.log('login is cancelled.')
    } else {
      this.props.onLoginFinished(this.props.navigation)
    }
  }

  private onLogoutFinished = () => {
    console.log('logout.')
  }
}
