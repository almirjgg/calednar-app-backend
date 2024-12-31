import { Router } from 'express';
import {
  createEvent,
  getEventById,
  updateEvent,
  deleteEvent,
  getEvents,
} from '../../controllers/events.js';
import { validateCreateEvent } from '../../helpers/valdiators.js';

const eventRouter = Router();

eventRouter
  .get('/', getEvents)
  .post('/', validateCreateEvent, createEvent)
  .get('/:id', getEventById)
  .put('/:id', updateEvent)
  .delete('/:id', deleteEvent);

export default eventRouter;
