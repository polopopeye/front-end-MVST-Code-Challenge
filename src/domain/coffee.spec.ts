import { Coffee } from './coffee';

it('is a valid Coffee', () => {
  expect(
    new Coffee({
      title: 'Lavazza Espresso',
      description: 'good for espresso in Italy',
      createdAt: new Date(2012, 1, 1),
    }).title
  ).toEqual('Lavazza Espresso');

  expect(
    new Coffee({
      title: 'Lavazza Espresso',
      description: 'good for espresso in Italy',
      createdAt: new Date(2012, 1, 1),
    }).description
  ).toEqual('good for espresso in Italy');
});

it('getDate', () => {
  const getDate = new Coffee({
    title: 'Lavazza Espresso',
    description: 'good for espresso in Italy',
    createdAt: new Date(2012, 1, 1),
  }).getDate();
  const expectedDate = jest.fn(() => new Date(2012, 1, 1));

  expect(getDate).toEqual(expectedDate());
});

it('getTitle', () => {
  const newCoffe = new Coffee({
    title: 'Lavazza Espresso',
    description: 'good for espresso in Italy',
    createdAt: new Date(2012, 1, 1),
  }).getTitle();

  expect(newCoffe).toEqual('Lavazza Espresso');
});
