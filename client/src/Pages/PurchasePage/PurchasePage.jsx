import React, { useState } from 'react';
import './PurchasePage.css'; // Import CSS file for styling

const PurchasePage = ({state, dispatch}) => {

  return (
    <section>
      <Carts state={state} dispatch={dispatch}/>
    </section>
  );
};

export default PurchasePage;
