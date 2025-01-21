import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RoutesDriverGateway {
  @SubscribeMessage('client:new-points')
  handleMessage(client: any, payload: any): string {
    console.log('message', payload);
    return 'Hello world!';
  }
}
