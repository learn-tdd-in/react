import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from '../NewMessageForm';

describe('<NewMessageForm />', () => {
  let getByTestId;

  describe('clicking the send button', () => {
    beforeEach(async () => {
      ({ getByTestId } = render(<NewMessageForm />));

      await userEvent.type(
        getByTestId('messageText'),
        'New message',
      );
      userEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('messageText').value).toEqual('');
    });
  });
});
