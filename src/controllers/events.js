import Event from '../models/Events.js';

const getEvents = async (req, res) => {
  try {
    const events = await Event.find().populate('user', 'name');
    res.status(200).json({ ok: true, events });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = new Event({ ...req.body, user: req.uid });
    const eventSaved = await event.save();
    res.status(201).json({ ok: true, event: eventSaved });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id).populate('user', 'name');
    if (!event) {
      return res.status(404).json({ ok: false, msg: 'event not found' });
    }
    res.status(200).json({ ok: true, event });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const userId = req.uid;
  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ ok: false, msg: 'event not found' });
    }
    if (event.user.toString() !== userId) {
      return res.status(401).json({ ok: false, msg: 'Unauthorized' });
    }

    const updatedEvent = {
      ...req.body,
      user: userId,
    };

    const eventUpdated = await Event.findByIdAndUpdate(id, updatedEvent, { new: true });
    res.status(200).json({ ok: true, event: eventUpdated });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.uid;
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ ok: false, msg: 'event to delete not found' });
    }
    if (event.user.toString() !== userId) {
      return res.status(401).json({ ok: false, msg: 'Unauthorized' });
    }
    await Event.findByIdAndDelete(id);
    res.status(200).json({ ok: true, msg: 'event deleted' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ ok: false, msg: 'error' });
  }
};

export { getEvents, createEvent, getEventById, updateEvent, deleteEvent };
