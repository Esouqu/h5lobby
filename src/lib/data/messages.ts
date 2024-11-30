import type { IMessage } from "$lib/interfaces";
import { getRandomTwColor } from "$lib/utils";
import { writable } from 'svelte/store';

function createMessages() {
  const { subscribe, update } = writable<IMessage[]>([
    {
      text: 'Привет, как дела?',
      timestamp: 1682001111,
      username: 'MikeWilliams',
      color: getRandomTwColor()
    },
    {
      text: 'Я в порядке, спасибо!',
      timestamp: 1682002222,
      username: 'DavidMartinez',
      color: getRandomTwColor()
    },
    {
      text: 'Чем ты сегодня занимаешься?',
      timestamp: 1682003333,
      username: 'EmilyRodriguez',
      color: getRandomTwColor()
    },
    {
      text: 'Просто работаю над своим проектом.',
      timestamp: 1682004444,
      username: 'KarenThompson',
      color: getRandomTwColor()
    },
    {
      text: 'Звучит интересно!',
      timestamp: 1682005555,
      username: 'MarkAnderson',
      color: getRandomTwColor()
    },
    {
      text: 'Да, это так!',
      timestamp: 1682006666,
      username: 'SarahWilson',
      color: getRandomTwColor()
    },
    {
      text: 'Дай знать, если тебе нужна помощь.',
      timestamp: 1682007777,
      username: 'TomBrown',
      color: getRandomTwColor()
    },
    {
      text: 'Спасибо, я сообщу!',
      timestamp: 1682008888,
      username: 'AliceJohnson',
      color: getRandomTwColor()
    },
    {
      text: 'Поговорим позже?',
      timestamp: 1682009999,
      username: 'BobSmith',
      color: getRandomTwColor()
    },
    {
      text: 'Конечно, поговорим позже.',
      timestamp: 1682011111,
      username: 'JaneDoe',
      color: getRandomTwColor()
    },
    {
      text: 'Пока!',
      timestamp: 1682012222,
      username: 'JohnDoe',
      color: getRandomTwColor()
    },
    {
      text: 'Привет, как дела?',
      timestamp: 1682001111,
      username: 'MikeWilliams',
      color: getRandomTwColor()
    },
    {
      text: 'Я в порядке, спасибо!',
      timestamp: 1682002222,
      username: 'DavidMartinez',
      color: getRandomTwColor()
    },
    {
      text: 'Чем ты сегодня занимаешься?',
      timestamp: 1682003333,
      username: 'EmilyRodriguez',
      color: getRandomTwColor()
    },
    {
      text: 'Просто работаю над своим проектом.',
      timestamp: 1682004444,
      username: 'KarenThompson',
      color: getRandomTwColor()
    },
    {
      text: 'Звучит интересно!',
      timestamp: 1682005555,
      username: 'MarkAnderson',
      color: getRandomTwColor()
    },
    {
      text: 'Да, это так!',
      timestamp: 1682006666,
      username: 'SarahWilson',
      color: getRandomTwColor()
    },
    {
      text: 'Дай знать, если тебе нужна помощь.',
      timestamp: 1682007777,
      username: 'TomBrown',
      color: getRandomTwColor()
    },
    {
      text: 'Спасибо, я сообщу!',
      timestamp: 1682008888,
      username: 'AliceJohnson',
      color: getRandomTwColor()
    },
    {
      text: 'Поговорим позже?',
      timestamp: 1682009999,
      username: 'BobSmith',
      color: getRandomTwColor()
    },
    {
      text: 'Конечно, поговорим позже.',
      timestamp: 1682011111,
      username: 'JaneDoe',
      color: getRandomTwColor()
    },
    {
      text: 'Пока!',
      timestamp: 1682012222,
      username: 'JohnDoe',
      color: getRandomTwColor()
    },
    {
      text: 'Привет, как дела?',
      timestamp: 1682001111,
      username: 'MikeWilliams',
      color: getRandomTwColor()
    },
    {
      text: 'Я в порядке, спасибо!',
      timestamp: 1682002222,
      username: 'DavidMartinez',
      color: getRandomTwColor()
    },
    {
      text: 'Чем ты сегодня занимаешься?',
      timestamp: 1682003333,
      username: 'EmilyRodriguez',
      color: getRandomTwColor()
    },
    {
      text: 'Просто работаю над своим проектом.',
      timestamp: 1682004444,
      username: 'KarenThompson',
      color: getRandomTwColor()
    },
    {
      text: 'Звучит интересно!',
      timestamp: 1682005555,
      username: 'MarkAnderson',
      color: getRandomTwColor()
    },
    {
      text: 'Да, это так!',
      timestamp: 1682006666,
      username: 'SarahWilson',
      color: getRandomTwColor()
    },
    {
      text: 'Дай знать, если тебе нужна помощь.',
      timestamp: 1682007777,
      username: 'TomBrown',
      color: getRandomTwColor()
    },
    {
      text: 'Спасибо, я сообщу!',
      timestamp: 1682008888,
      username: 'AliceJohnson',
      color: getRandomTwColor()
    },
    {
      text: 'Поговорим позже?',
      timestamp: 1682009999,
      username: 'BobSmith',
      color: getRandomTwColor()
    },
    {
      text: 'Конечно, поговорим позже.',
      timestamp: 1682011111,
      username: 'JaneDoe',
      color: getRandomTwColor()
    },
    {
      text: 'Пока!',
      timestamp: 1682012222,
      username: 'JohnDoe',
      color: getRandomTwColor()
    }
  ]);

  function addMessage(message: IMessage) {
    update((messages) => [...messages, message]);
  }

  return {
    subscribe,
    addMessage
  }
}

const messages = createMessages();

export default messages;