import * as React from 'react'

import { Page, Title, TitleContainer } from './stylesComponents'

import { NavigationInjectedProps } from 'react-navigation'

export interface Props {}

export interface Dispatch {}

interface State {}

export default class Component extends React.Component<
  Props & Dispatch & NavigationInjectedProps,
  State
> {
  public render() {
    return (
      <Page>
        <TitleContainer>
          <Title>DEFAULT</Title>
        </TitleContainer>
      </Page>
    )
  }
}
