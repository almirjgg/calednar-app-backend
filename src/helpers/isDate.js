import m from 'moment';

const isDate = value => {
  if (!m(value).isValid()) {
    return false;
  }
  return true;
};

export { isDate };
