const typeDefs = [`

  type Query{
    event(_id: String): Event
  }

  type User {
    email: String
  }

  type Content {
    _id: String
    title: String
    owners: [User]
  }

  type Event {
    _id: String
    when: String
    where: String
    organizers: [User]
    contents: [Content]
  }

  input OrganizerInput{
    id: String
  }

  input ContentInput{
    id: String
  }

  type Mutation {
    createEvent(when: String, where: String, organizers: [OrganizerInput], contents: [ContentInput]): Event
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = {
  typeDefs
};
