import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddHero = (props) => {
  return (
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

      <Button color="info" onClick={() => props.toggle(false)}>
        Submit
      </Button>
    </Form>
  );
};

export default AddHero;
