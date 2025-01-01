import { check } from 'express-validator';
import { validatorFields } from '../middlewares/validator-fields.js';
import { isDate } from './isDate.js';
const validateLogin = [
  check('email', 'email is required').isEmail(),
  check('password', 'password is required').not().isEmpty(),
  validatorFields,
];

const validateCreateUser = [
  check('name', 'name is required').not().isEmpty(),
  check('email', 'email is required').isEmail(),
  check('password', 'password is required').not().isEmpty(),
  check('password', 'password must be at least 6 characters').isLength({ min: 6 }),
  validatorFields,
];

const validateCreateEvent = [
  check('title', 'title is required').not().isEmpty(),
  check('start', 'start is required').custom(isDate),
  check('end', 'end is required').custom(isDate),
  validatorFields,
];

export { validateLogin, validateCreateUser, validateCreateEvent };
