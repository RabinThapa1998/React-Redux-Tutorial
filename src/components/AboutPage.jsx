import React from "react";
import { connect, useSelector } from "react-redux";

function AboutPage() {
  const data = useSelector((state) => state.carReducer);
  const apiData = useSelector((state) => state.apiReducer);
  console.log(
    "🚀 ~ file: AboutPage.jsx ~ line 7 ~ AboutPage ~ apiData",
    apiData
  );
  return (
    <div>
      <h1>AboutPage.js</h1>
      <p>car total cost: {data.cost}</p>
      <p>total number of cars: {data.quantity}</p>
      <hr />
      <h3>Api call -thunk middleware</h3>
      {apiData.loading && <p>loading....</p>}
      {apiData.data.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default AboutPage;

// old method
// const mapStateToProps = (state)=>{}
// export default connect(mapStateToProps)(AboutPage)
