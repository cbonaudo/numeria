import { translateNumber } from '@/utils/translation';

describe('translation.js', () => {
  it('should change figures[0,0,0,2] to Deux', () => {
    expect(translateNumber([0, 0, 0, 2])).toEqual('Deux');
  });

  it('should change figures[0,6,7,2] to Six Cent Soixante-Douze', () => {
    expect(translateNumber([0, 6, 7, 2])).toEqual('Six cent soixante-douze');
  });

  it('should change figures[1,0,0,7] to Mille sept', () => {
    expect(translateNumber([1, 0, 0, 7])).toEqual('Mille sept');
  });

  it('should change figures[2,3,0,0] to Deux mille trois cent', () => {
    expect(translateNumber([2, 3, 0, 0])).toEqual('Deux mille trois cents');
  });
});
