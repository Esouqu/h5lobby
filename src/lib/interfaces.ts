export interface IUser {
  id: number;
  name: string;
  status: string;
  location: string;
  portrait?: string;
}

export interface IMessage {
  text: string;
  timestamp: number;
  username: string;
  color: string;
}