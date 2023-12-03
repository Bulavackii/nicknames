import Validator from '../app';

test.each([
  ['правильный вариант', 'Denis_23-10-05-warrior', true],
  ['неправильный вариант-кириллица', 'Денис_207-10-2023-warrior', false],
  ['неправильный вариант-4 цифры подряд', 'Денис_20-09-2023-warrior', false],
  ['неправильный вариант-цифра(символ) в начале имени', '2Denis_23-08-05-warrior', false],
  ['неправильный вариант-цифра(символ) в конце имени', 'Denis_23-01-05-warrior-', false],
])(
  ('проверка имени вариант %s при %i'),
  (_, name, expected) => {
    const user = new Validator(name);
    const check = user.validateUsername();
    expect(check).toBe(expected);
  },
);