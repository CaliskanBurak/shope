import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// const ShopPage = ({ match }) => (
//   <div className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

class ShopPage extends React.Component {
  //moved everything to shop.actions with redux thunk.
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  componentDidMount() {
      const { fetchCollectionsStartAsync } = this.props;
     fetchCollectionsStartAsync();



    // const { updateCollections } = this.props;
    // // fetch(
    // //   "https://firestore.googleapis.com/v1/projects/shope-5127a/databases/(default)/documents/collections"
    // // )
    // //   .then((response) => response.json())
    // //   .then((collections) => console.log('testttt',collections));
    //moved everything to shop.actions with redux thunk.
    // const collectionRef = firestore.collection("collections");
    // collectionRef.get().then((snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
    // collectionRef.onSnapshot(async (snapshot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false})
    // });
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    //const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

  //do not need with redux thunk.
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
