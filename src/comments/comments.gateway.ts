import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Comment } from './comment.interface';

@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:8000',
      'https://frontend-ashen-gamma-48.vercel.app',
      'https://real-time-comment-frontend-eight.vercel.app'
    ],
    methods: ['GET', 'POST'],
    credentials: true
  },
})
export class CommentsGateway {
  @WebSocketServer()
  server: Server;

  private comments: Comment[] = [];

  @SubscribeMessage('get_comments')
  handleGetComments(@ConnectedSocket() client: Socket) {
    client.emit('comments_list', this.comments);
  }

  @SubscribeMessage('add_comment')
  handleAddComment(
    @MessageBody() data: { author: string; text: string },
    @ConnectedSocket() client: Socket,
  ) {
    const newComment: Comment = {
      id: Date.now().toString(),
      author: data.author,
      text: data.text,
      timestamp: new Date(),
    };

    this.comments.push(newComment);
    this.server.emit('new_comment', newComment);
  }
}
