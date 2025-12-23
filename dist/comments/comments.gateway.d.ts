import { Server, Socket } from 'socket.io';
export declare class CommentsGateway {
    server: Server;
    private comments;
    handleGetComments(client: Socket): void;
    handleAddComment(data: {
        author: string;
        text: string;
    }, client: Socket): void;
}
