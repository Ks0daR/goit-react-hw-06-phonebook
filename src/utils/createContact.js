import { v4 as uuidv4 } from 'uuid';

function createContact(name, number) {
  return {
    id: uuidv4(),
    name,
    number,
  };
}

export default createContact;
