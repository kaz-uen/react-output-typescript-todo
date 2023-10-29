import React, { FC } from 'react';
import { clearTodo } from '../../features/actions/TodoSlice';
import { closeModal } from '../../features/actions/ModalSlice';
import { AppDispatch } from '../../store/store';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ModalButton from '../atoms/Button/Modal';

const SModal = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SModalBody = styled.div`
  background: var(--color-white);
  width: 80vw;
  max-width: 400px;
  border-radius: var(--radius);
  padding: 2rem 1rem;
  text-align: center;
`;

const SModalTitle = styled.h4`
  margin-bottom: 0;
  line-height: 1.5;
`;

const SModalBtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Modal: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <SModal>
      <SModalBody>
        <SModalTitle>タスクをすべて削除しますか？</SModalTitle>
        <SModalBtnContainer>
          <ModalButton
            onClick={() => {
              dispatch(clearTodo());
              dispatch(closeModal());
            }}
          >
            はい
          </ModalButton>
          <ModalButton onClick={() => dispatch(closeModal())}>いいえ</ModalButton>
        </SModalBtnContainer>
      </SModalBody>
    </SModal>
  );
};

export default Modal;
