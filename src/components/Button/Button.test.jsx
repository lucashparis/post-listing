import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '.'
/*
  DOC
  https://github.com/testing-library/jest-dom
  https://github.com/sapegin/jest-cheat-sheet
*/
describe('<Button/>', () => {
    test('Should render the button with the text "Load more"', () => {
      render(<Button text="Load more"/>); // Captura o componente que será testado atravéz do parâmetro
      
      expect.assertions(1);

      const button = screen.getByRole('button', {name: /load more/i}); // Captura o elemento
      expect(button).toBeInTheDocument(); // Verifica se o botão foi renderizado
    });

    test('Should call function button click', () => {
      const fn = jest.fn(); // Cria uma fução mock
      render(<Button text="Load more" onClick={fn}/>);

      const button = screen.getByRole('button', {name: /load more/i}); 

      fireEvent.click(button) // Simula o evento do click

      expect(fn).toHaveBeenCalled(); // Verifica se foi chamado a função
    });
    
    test('Should be disabled when disabled is true', () => {
      const fn = jest.fn(); // Cria uma fução mock
      render(<Button text="Load more" disabled={true}/>);

      const button = screen.getByRole('button', {name: /load more/i}); // Verifica o nome do botão

      expect(button).toBeDisabled(); // Verifica se o botão está desabilitado
    });
    
    test('Should be enabled when disabled is false', () => {
      render(<Button text="Load more" disabled={false}/>);
      const button = screen.getByRole('button', {name: /load more/i}); 
      expect(button).toBeEnabled(); // Verifica se o botão está habilitado
    });
});
  
  