const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const database = require('./database');
const cors = require('cors');

// current production
// const typeDefs = gql`
//    type PLAYER {
//       PLAYER_ID: Int
//       PLAYER_NAME: String
//       DUNGEON_MASTER: Boolean
//       ACTIVE: Boolean
//       PHONE_NUMBER: String
//       EMAIL: String
//    }
//    type WIZ_SOR_SPELL {
//       WSS_ID: Int
//       WSS_NAME: String
//       WSS_SCHOOL: String
//       WSS_LEVEL: Int
//       WSS_CAST_TIME: String
//       WSS_COMPONENTS: String
//       WSS_RANGE: String
//       WSS_EFFECT: String
//       WSS_DURATION: String
//       WSS_SAVING_THROW: String
//       WSS_SPELL_RESIST: String
//       WSS_DESCRIPTION: String
//       RULEBOOK: String
//    }
//    type Query {
//       players: [PLAYER]
//       wizardSpells: [WIZ_SOR_SPELL]
//    }
// `

const typeDefs = gql`
   type Spell {
      id: Int
      name: String
      school: String
      cast_time: String
      components: String
      range: String
      target_or_area: String
      effect: String
      duration: String
      saving_throw: String
      resist: String
      description: String
      rulebook: String
      classes: [String]
   }
   type Query {
      spells: [Spell]
   }
`;

const resolvers = {
   Query: {
      spells: async () => {
         const spells = database.withSchema('starlight_schema').select().table('SPELLS');
         return spells;
      }
   }
}

const app = express();
let apolloServer = null;
const startApolloServer = async () => {
   apolloServer = new ApolloServer({
      typeDefs,
      resolvers,
   });
   await apolloServer.start();
   apolloServer.applyMiddleware({ app });
}

startApolloServer();
app.use(cors());
app.listen(4000, function() {
   console.log(`Server running on port 4000`);
});