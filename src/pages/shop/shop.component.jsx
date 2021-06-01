import React , { useEffect }from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
//import { createStructuredSelector } from "reselect";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import {
//   firestore,
//   convertCollectionsSnapshotToMap,
// } from "../../firebase/firebase.utils";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";


// const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);

// const ShopPage = ({ match }) => (
//   <div className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

const ShopPage = ({ fetchCollectionsStartAsync , match}) => {
  //moved everything to shop.actions with redux thunk.
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshot = null;

  // componentDidMount() {
  //     const { fetchCollectionsStartAsync } = this.props;
  //    fetchCollectionsStartAsync();
 useEffect(() => {
   fetchCollectionsStartAsync();
 }, [fetchCollectionsStartAsync])


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
  //}

  //render() {
    //const { match } = this.props;
    //const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  //}
}

// const mapStateToProps = createStructuredSelector({
//   isCollectionsLoaded: selectIsCollectionsLoaded
// })

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())

  //do not need with redux thunk.
  // updateCollections: (collectionsMap) =>
  //   dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
