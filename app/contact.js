const ContactSchema = {
  name: 'Contact',
  properties: {
    name:     'string',
    email:    'string',
    phone:     {type: 'string', optional: true},
    picture:  {type: 'data', optional: true}, 
  }
};

module.exports = ContactSchema;
