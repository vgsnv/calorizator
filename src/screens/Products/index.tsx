import NeedProps from '../../components/needProps/needProps';
import Component, { Dispatch, Props } from './Component';

import Header from './HeaderScreen';

import toProductsFormToEdit from './thunks/toProductsFormToEdit';

type MapStateToProps = Props;

const getProducts = entities => {
  return Object.keys(entities).map(key => {
    return entities[key];
  });
};

const mapStateToProps = ({ db }): MapStateToProps => ({
  products: getProducts(db.products.entities)
});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProductsFormToEdit: (nav, id) => dispatch(toProductsFormToEdit(nav, id))
});

const headerOptions = {
  headerScreen: Header,
  gesturesEnabled: false
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
