import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";


function Home() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Jobly!
            </h3>
            <p>All the jobs ins one, covinient place.</p>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
