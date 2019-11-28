import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { updateCollections } from "../../redux/shop/shop.actions";
import { firestore } from "../../firebase/firebase.utils";
import { convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import "./shop.styles.scss";

const ShopPage = ({ match, updateCollections }) => {
  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collections");

    unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collections);
    });
    return () => {
      unsubscribeFromSnapshot = null;
    };
  }, []);
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
