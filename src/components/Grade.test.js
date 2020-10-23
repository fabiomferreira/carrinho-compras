import { render } from '@testing-library/react';
import React from 'react';
import Grade from './Grade';

const DivTest = () => <div data-testid="div-teste">teste</div>;

describe('<Grade />', () => {
  it('Deve conter os filhos', () => {
    const { queryByTestId } = render(
      <Grade>
        <DivTest />
      </Grade>
    );
    expect(queryByTestId('div-teste')).toBeInTheDocument();
  });
});
