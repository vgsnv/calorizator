import * as React from "react";
import { connect } from "react-redux";

import PageContainer from "./pageContainer";

interface Props {
  appReady: boolean;
}

interface State {}

export default function(
  mapStateToProps,
  mapDispatchToProps,
  PreLoginScreen,
  headerOptions
) {
  const container = (Component, options) => {
    return class extends React.Component<Props, State> {
      static navigationOptions = ({ navigation }) => {
        if (!options.headerScreen)
          return {
            header: null
          };

        const Header = options.headerScreen;
        const HeaderComponent = <Header navigation={navigation} />;

        return {
          ...options,
          headerTitle: null,
          headerLeft: null,
          headerRight: null,
          header: HeaderComponent
        };
      };

      render() {
        const props = this.props;
        const { appReady, ...componentProps } = props;
        return (
          <PageContainer appReady={appReady}>
            <Component {...componentProps} />
          </PageContainer>
        );
      }
    };
  };

  type MapStateToProps = Props;

  const selfMapStateToProps = (state): MapStateToProps => {
    return {
      ...mapStateToProps(state),
      appReady: state.app.App.ready
    };
  };

  return connect(
    selfMapStateToProps,
    mapDispatchToProps
  )(container(PreLoginScreen, headerOptions));
}
