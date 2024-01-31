import { Type } from '@fastify/type-provider-typebox';
import { userFields } from '../../mutations.js';

export const getProfileByUserIdSchema = {
  params: Type.Object(
    {
      userId: userFields.id,
    },
    {
      additionalProperties: false,
    },
  ),
};
