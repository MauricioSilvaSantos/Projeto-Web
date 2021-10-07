export const index = (values) => {
  return { type: 'INDEX', values };
};

export const show = (values) => {
  return { type: 'SHOW', values };
};

export default {
  index,
  show,
}