import React, { Component } from 'react';
interface MessagePayload {
  nome: string;
  mensagem: string;
}
interface State {
  mensagens: MessagePayload[];
}
export class MessageList extends Component<{}, State> {
  state: State = {
    mensagens: []
  };
renderMensagens = () => {
    return this.state.mensagens.map(mensagem => <Mensagem {...mensagem} />);
  };
render() {
    return <ul>{this.renderMensagens()}</ul>;
  }
}
const Mensagem = ({ mensagem, nome }: MessagePayload) => {
  return (
    <li>
      <p>
        {mensagem} -
        <small>
          <i> {nome}</i>
        </small>
      </p>
    </li>
  );
};