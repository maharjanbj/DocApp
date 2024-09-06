import React from "react";
import error from "../../images/404Error.jpg";
import "./Error.css";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

  return (
    <Layout>
      <div className="error-page">
        <div className="error-contain">
          <h1>Page Not Found</h1>
          <div className="error-paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            similique id, animi error quam distinctio maiores. Quod ipsam illo,
            doloremque voluptate, rerum, debitis magnam saepe dolorem assumenda
            qui dignissimos eaque?
          </div>
          <div className="error-btn" onClick={()=> navigate('/')}>
            <button>Back To Home</button>
          </div>
        </div>
        <div className="error-img">
          <img src={error} alt="" />
        </div>
      </div>
    </Layout>
  );
};

export default Error;
