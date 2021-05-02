import Dashboard from './components/Dashboard';
import Modal from 'react-modal';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement(document.getElementById('root')!);

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false)
  }

  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />

      <NewTransactionModal  
        onRequestClose={handleCloseNewTransactionModal}
        isNewTransactionModalOpen={isNewTransactionModalOpen}
      />
    </>
  );
}
