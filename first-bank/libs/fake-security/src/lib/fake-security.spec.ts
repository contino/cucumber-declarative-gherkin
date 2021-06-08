import { fakeSecurity } from './fake-security';

describe('fakeSecurity', () => {
  it('should work', () => {
    expect(fakeSecurity()).toEqual('fake-security');
  });
});
