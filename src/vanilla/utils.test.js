import { isTweetFr } from './utils';

describe('isTweetFr', () => {

  it('should return true when passed a french tweet', () => {
    expect(isTweetFr({ lang: 'fr' })).toBeTruthy();
    expect(isTweetFr({ lang: 'fr-ca' })).toBeTruthy();
  });
  it('should return false when passed a non french tweet', () => {
    expect(isTweetFr({ lang: 'en' })).toBeFalsy();
    expect(isTweetFr({ lang: undefined })).toBeFalsy();
    expect(() => isTweetFr()).toThrow();
  });
  it('should return undefined when passed nothing', () => {
    expect(() => isTweetFr()).toThrow();
  });
});

