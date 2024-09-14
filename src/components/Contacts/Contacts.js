import { Formik, Field, Form } from 'formik';

import { InitialContactsList } from 'components/InitialContactsList/InitialContactsList';
import { LiStyle, UlStyle } from './ContactsStyled';

export const Contacts = ({ value, contactsRender, onDelete, onFilter }) => {
  return (
    <div>
      <h1>Contacts</h1>
      <UlStyle>
        <Formik>
          <Form>
            <label>Filter</label>
            <Field name="filter" value={value} onChange={onFilter} />
          </Form>
        </Formik>
        {contactsRender.map(list => {
          return (
            <LiStyle key={list.id}>
              <InitialContactsList item={list} onDelete={onDelete} />
            </LiStyle>
          );
        })}
      </UlStyle>
    </div>
  );
};
