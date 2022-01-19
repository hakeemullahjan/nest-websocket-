import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

// @WebSocketGateway(80, { namespace: 'chat' }) port 80, namespace chat
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer() server;

  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    console.log('message', message);
    this.server.emit('message', message);
  }
}
