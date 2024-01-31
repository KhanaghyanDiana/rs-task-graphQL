import { Type } from '@fastify/type-provider-typebox';
import { userFields } from '../../mutations.js';

export const getPostsByUserIdSchema = {
  params: Type.Object(
    {
      userId: userFields.id,
    },
    {
      additionalProperties: false,
    },
  ),
};
