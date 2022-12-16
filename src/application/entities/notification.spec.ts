import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  test('it should be able to create a notification content', () => {
    const content = new Notification({
      content: new Content('Nova Solicitação de amizade'),
      category: 'social',
      recipientId: 'example-recipientId',
    });

    expect(content).toBeTruthy();
  });
});
