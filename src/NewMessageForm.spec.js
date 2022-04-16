import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewMessageForm from './NewMessageForm';

describe('NewMessageForm', () => {
  describe('clicking the send button', () => {
    let sendHandler;

    beforeEach(async () => {
      sendHandler = jest.fn().mockName('sendHandler');

      render(<NewMessageForm onSend={sendHandler} />);

      await userEvent.type(
        screen.getByTestId('messageText'),
        'New message',
      );
      userEvent.click(screen.getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(screen.getByTestId('messageText').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
