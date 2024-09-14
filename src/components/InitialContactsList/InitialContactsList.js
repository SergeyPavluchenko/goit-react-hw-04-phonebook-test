import {
  ButtonDel,
  FieldContact,
  MdDelete,
  NumberStyle,
} from './InitialContactsListStyled.js';

export const InitialContactsList = ({
  item: { id, name, number },
  onDelete,
}) => {
  return (
    <FieldContact>
      <h3>{name}</h3>
      <span>tel:</span>
      <NumberStyle>{number}</NumberStyle>
      <ButtonDel onClick={() => onDelete(id)}>
        <MdDelete />
      </ButtonDel>
    </FieldContact>
  );
};
