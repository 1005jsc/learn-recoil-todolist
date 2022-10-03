import { RecoilRoot, atom, selector } from 'recoil';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});

export const titleState = atom<string | undefined>({
  key: 'titleState',
  default: '',
});

export type TodoType = {
  id: number;
  title: string | undefined;
  content: string | undefined;
  isDone: boolean;
};

export const todosState = atom<TodoType[]>({
  key: 'todosState',

  default: [
    {
      id: 1,
      title: '리엑트 공부하기',
      content: '리엑트 기초를 공부해봅시다',
      isDone: false,
    },
    {
      id: 2,
      title: '재신재신',
      content: '나는 재신재신입니다',
      isDone: false,
    },
    {
      id: 3,
      title: '아이유',
      content: '나는 아이유입니다',
      isDone: true,
    },
  ],
});
