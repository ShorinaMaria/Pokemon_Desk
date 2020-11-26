import toCapitalizeFirstLetter from './toCapitalizeFirstLetter';

describe('toCapitalizeFirstLetter', () => {
  test('function receives a string and returns the same string with capitalized first letter', () => {
    const str = toCapitalizeFirstLetter('pikachu');

    expect(str).toEqual('Pikachu');
  });

  test('function receives falsy value and returns empty string', () => {
    const str = toCapitalizeFirstLetter(([] as unknown) as string);

    expect(str).toEqual('');
  });

  test('function receives empty object value and returns empty string', () => {
    const str = toCapitalizeFirstLetter(({} as unknown) as string);

    expect(str).toEqual('');
  });

  test('function receives Infinity and returns empty string', () => {
    const str = toCapitalizeFirstLetter((Infinity as unknown) as string);

    expect(str).toEqual('');
  });

  test('function receives empty string and returns empty string', () => {
    const str = toCapitalizeFirstLetter('');

    expect(str).toEqual('');
  });

  test('function receives a string with capitalized first letter and returns the string with capitalized first letter', () => {
    const str = toCapitalizeFirstLetter('Test');

    expect(str).toEqual('Test');
  });
});
