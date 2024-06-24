import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Navigation from "./Navigation";

function Home() {
  return (
    <div>
      <Navigation /> {/* Render NavBar component */}
      <section className="col-md-8">
        <Card>
          <CardBody className="text-center">
            <CardTitle>
              <h3 className="font-weight-bold">
                Welcome to Jobly!
              </h3>
              <p>All the jobs in one, convenient place.</p>
            </CardTitle>
          </CardBody>
        </Card>
      </section>
    </div>
  );
}

export default Home;