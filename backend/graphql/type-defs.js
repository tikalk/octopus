const typeDefs = [`

  type Query{
    event(_id: String): Event
    events: [Event]
    content(_id: String): Content
    contents: [Content]
  }

  type User {
    email: String
  }

  type Content {
    _id: String
    title: String
    type: String
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
    email: String
  }

  input OwnersInput{
    email: String
  }

  input ContentInput{
    id: String
  }

  type Mutation {
    createEvent(when: String, where: String, organizers: [OrganizerInput], contents: [ContentInput]): Event
    createContent(title: String, type: String, owners: [OwnersInput]): Content
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

module.exports = {
  typeDefs
};
