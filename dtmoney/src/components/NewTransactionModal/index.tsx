import { Container, TransationTypeContainer, RadioBox } from './styles';
import Modal from 'react-modal';

import outcomeImg from '../../assets/outcome.svg';
import incomeImg from '../../assets/income.svg';
import closeImg from '../../assets/close.svg';
import { FormEvent, useState } from 'react';

import { api } from '../../services/api';

interface NewTransactionModalProps {
  isNewTransactionModalOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({onRequestClose, isNewTransactionModalOpen}: NewTransactionModalProps) {
  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction (e: FormEvent) {
    e.preventDefault();

    api.post("transactions").then(data => console.log(data))
  }

  return (
    <Modal
      isOpen={isNewTransactionModalOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button" 
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal"/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastro</h2>

        <input 
          placeholder="Titulo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        />

        <TransationTypeContainer>
          <RadioBox
            activeColor="green"
            isActive={type === 'deposit'}
            type="button"
            onClick={() => {setType('deposit')}}
          >
            <img src={incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            activeColor="red"
            isActive={type === 'withdraw'}
            type="button"
            onClick={() => {setType('withdraw')}}
          >
            <img src={outcomeImg} alt="Saída"/>
            <span>Saída</span>
          </RadioBox>
        </TransationTypeContainer>

        <input 
          placeholder="Categoria"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
};

