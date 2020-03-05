import React from "react";
import { Hero, GetThis } from "sld-component-library";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ExampleList from "../components/ExampleList";

import Places from "../data/Start.json";

export default function Start() {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="row is-light-grey-bg">
        <div className="col-xs-12 col-sm-3 pad-10" style={{textAlign:'center'}}>
        
          <h1 className="is-orange">Tech Nonsense</h1>
        </div>
        <div className="col-xs-12 col-sm-9">
        <ExampleList />
        </div>  
        
      </div>
    </Layout>
  );
}
