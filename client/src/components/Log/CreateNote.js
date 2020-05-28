import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Popover } from 'reactstrap';


const CreateNote = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);

  return (

      <div>
        <Button outline id="Popover1" type="button" color="success">
          Create +
        </Button>
        <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle} style={{maxWidth: '150px'}}>
          <Form>
            <FormGroup>
              <Label for="log_title" className="headerText">Title</Label>
              <Input type="text" name="log_title" id="log_title" {...props}/>
            </FormGroup>
            <FormGroup>
              <Label for="note" className="headerText">Note</Label>
              <Input type="textarea" name="note" id="note" {...props}/>
            </FormGroup>
            <FormGroup>
              <Label for="technology" className="headerText">Technology</Label>
              <Input type="text" name="technology" id="technology" {...props}/>
            </FormGroup>
            <FormGroup>
              <Label for="category" className="headerText">Category</Label>
              <Input type="text" name="category" id="category" {...props}>
              </Input>
            </FormGroup>

            <Button color="success">Submit</Button>
      </Form>
        </Popover>
      </div>
  );
}

export default CreateNote;