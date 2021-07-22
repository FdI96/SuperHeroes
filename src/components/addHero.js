import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Card } from "reactstrap";

const AddHero = (props) => {
  const updateStates = () => {
    props.toggle(false);
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let planet = document.getElementById("planet").value;
    let mission = {
      code: 1,
      description: document.getElementById("mission").value,
      type: document.getElementById("mission-type").value,
    };
    let superpower = {
      code: 2,
      description: document.getElementById("power").value,
      level: document.getElementById("level").value,
    };
    let team = {
      id: Math.random(),
      name: document.getElementById("team").value,
    };
    let newHero = {
      name: name,
      year: age,
      planet: planet,
      mission: [mission],
      superpower: [superpower],
      team: [team],
    };

    let newHeroesCollection = props.heroesCollection;
    newHeroesCollection.push(newHero);
    props.addHero(newHeroesCollection);
  };

  return (
    <Card body>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="A new hero's name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="team">Team</Label>
          <Input type="select" name="team" id="team">
            <option>Space Guardians</option>
            <option>Earth Protectors</option>
            <option>Power Girls</option>
            <option>None</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="mission">Mission</Label>
          <Input type="select" name="mission" id="mission">
            <option>Put out fire</option>
            <option>Save the day</option>
            <option>Save a civilization</option>
            <option>Save the world</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="mission-type">Mission type</Label>
          <Input type="select" name="mission-type" id="mission-type">
            <option>MR</option>
            <option>MSU</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="power">Super Power</Label>
          <Input type="select" name="power" id="power">
            <option>Super speed</option>
            <option>Super strenght</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="level">Power level</Label>
          <Input
            type="integer"
            name="level"
            id="level"
            placeholder="Hero's power level"
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            type="integer"
            name="age"
            id="age"
            placeholder="How old is your hero?"
          />
        </FormGroup>
        <FormGroup>
          <Label for="planet">Planet</Label>
          <Input
            type="integer"
            name="planet"
            id="planet"
            placeholder="Which planet is your hero from?"
          />
        </FormGroup>

        <Button color="info" onClick={() => updateStates()}>
          Submit
        </Button>
      </Form>
    </Card>
  );
};

export default AddHero;
