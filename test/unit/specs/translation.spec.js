import Vue from 'vue';
import { translateNumbers } from '@/utils/translation';

describe('translation.js', () => {
  it('should change figures[0,0,0,2] to Deux', () => {
    expect(translateNumbers([0, 0, 0, 2])).toEqual('Deux');
  });

  it('should change figures[0,6,7,2] to Six Cent Soixante-Douze', () => {
    expect(translateNumbers([0, 6, 7, 2])).toEqual('Six Cent Soixante-Douze');
  });

  it('should change figures[1,0,0,7] to Mille Sept', () => {
    expect(translateNumbers([1, 0, 0, 7])).toEqual('Mille Sept');
  });

  it('should change figures[2,3,0,0] to Deux Mille Trois Cent', () => {
    expect(translateNumbers([2, 3, 0, 0])).toEqual('Deux Mille Trois Cent');
  });
});
