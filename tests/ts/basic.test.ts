import { HelloJsii } from '../../lib/index'

test('basic', () => {
    const helloJsii = new HelloJsii()
    helloJsii.sayHello('Richard');
  });