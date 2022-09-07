import React from "react";
import { connect, useSelector } from "react-redux";

function AboutPage() {
  const data = useSelector((state) => state.carReducer);
  return (
    <div>
      <h1>AboutPage.js</h1>
      <p>car total cost: {data.cost}</p>
      <p>total number of cars: {data.quantity}</p>
    </div>
  );
}

export default AboutPage;

// old method
// const mapStateToProps = (state)=>{}
// export default connect(mapStateToProps)(AboutPage)
