import React from "react";

import { Card, CardSubtitle, CardTitle, CardText, Row, Col } from "reactstrap";

const ShowHeroes = (props) => {
  return (
    <Row>
      <div class="accordion" id="accordionExample">
        {props.heroesCollection.map((element) => {
          return (
            <Col>
              <div class="accordion-item">
                <h2 class="accordion-header" id={"heading-" + element.name}>
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapse-" + element.name}
                    aria-expanded="true"
                    aria-controls={"#collapse-" + element.name}
                  >
                    {element.name}
                  </button>
                </h2>
                <div
                  id={"collapse-" + element.name}
                  class="accordion-collapse collapse show"
                  aria-labelledby={"heading-" + element.name}
                >
                  <div class="accordion-body">
                    <Card
                      body
                      color="success"
                      className="card-height rounded shadow-lg"
                    >
                      <CardTitle tag="h5">{element.name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2">
                        Team:
                        {element.team === " "
                          ? "This hero works alone"
                          : element.team.map((e) => (
                              <div key="{e.name}">{e.name}</div>
                            ))}
                      </CardSubtitle>
                      <CardText>
                        Missions:
                        {element.mission.map((e) => (
                          <div key="{e.code}">
                            {e.description + " is a type: " + e.type}
                          </div>
                        ))}
                      </CardText>
                      <CardText>
                        SuperPowers:
                        {element.superpower.map((e) => (
                          <div key="{e.code}">
                            {e.description + " with level: " + e.level}
                          </div>
                        ))}
                      </CardText>
                      Age:
                      <CardText>{element.year}</CardText>
                      Planet:
                      <CardText>
                        {element.planet === null ? "Earth" : element.planet}
                      </CardText>
                    </Card>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </div>
    </Row>
  );
};

export default ShowHeroes;
