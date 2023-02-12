// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Post, Waitlist, APIDOCs } = initSchema(schema);

export {
  Post,
  Waitlist,
  APIDOCs
};