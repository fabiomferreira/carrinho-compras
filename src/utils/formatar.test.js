import { formataDinheiro, capitalize } from './formatar';

const space = '\xa0';

describe('formatar.js', () => {
  describe('formataDinheiro', () => {
    it('valor redondo', () => {
      expect(formataDinheiro('5')).toEqual(`R$${space}5,00`);
    });
    it('valor com uma casa', () => {
      expect(formataDinheiro('2.4')).toEqual(`R$${space}2,40`);
    });
    it('valor com duas casas', () => {
      expect(formataDinheiro('7.29')).toEqual(`R$${space}7,29`);
    });
  });
  describe('capitalize', () => {
    it('lower case', () => {
      expect(
        capitalize('esse é o teste que testa a funcionalidade da função')
      ).toEqual('Esse é o Teste que Testa a Funcionalidade da Função');
    });
  });
});
