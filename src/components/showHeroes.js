import React from "react";

import { Card, CardSubtitle, CardTitle, CardText, Row, Col } from "reactstrap";

const ShowHeroes = (props) => {
  return (
    <Row>
      {props.heroesCollection.map((element) => {
        return (
          <Col>
            <Card body color="success" className="card-height">
              <CardTitle tag="h5">{element.name}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2">
                Team:
                {element.team === " "
                  ? "This hero works alone"
                  : element.team.map((e) => <div key="{e.name}">{e.name}</div>)}
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
          </Col>
        );
      })}
    </Row>
  );
};

export default ShowHeroes;
