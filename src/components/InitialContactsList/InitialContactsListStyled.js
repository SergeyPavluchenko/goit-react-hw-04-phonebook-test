import styled from 'styled-components';
import { MdDelete as Delete } from 'react-icons/md';

export const FieldContact = styled.div`
  gap: 4px;
`;

export const NumberStyle = styled.span`
  margin-left: 8px;
`;

export const ButtonDel = styled.button`
  margin-left: 10px;
  width: 30px;
  height: 17px;
  cursor: pointer;
  padding: 0;
  border: 1px solid black;
  :hover {
    background-color: white;
  }
`;
export const MdDelete = styled(Delete)`
  width: 100%;
  height: 100%;
`;
