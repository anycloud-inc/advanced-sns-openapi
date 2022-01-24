/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/auth": {
    post: operations["signIn"];
    delete: operations["signOut"];
  };
  "/account": {
    get: operations["getAccount"];
    post: operations["createAccount"];
  };
  "/account/icon_image": {
    patch: operations["updateIconImage"];
  };
  "/account/profile": {
    patch: operations["updateProfile"];
  };
  "/posts": {
    get: operations["findPostList"];
    post: operations["createPost"];
  };
  "/posts/{id}": {
    get: operations["findPost"];
    delete: operations["deletePost"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/rooms": {
    get: operations["findRoomList"];
    post: operations["findOrCreateRoom"];
  };
  "/rooms/{id}": {
    get: operations["findRoom"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/rooms/{id}/read": {
    patch: operations["updateReadAt"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/messages": {
    get: operations["listMessages"];
    post: operations["createMessage"];
  };
  "/messages/via_post": {
    post: operations["createMessageViaPost"];
  };
  "/timeline/by_each_person": {
    get: operations["listTimelinesByEachPerson"];
  };
  "/friend_requests": {
    post: operations["createFriendRequest"];
    delete: operations["deleteFriendRequest"];
  };
  "/friend_requests/receiving": {
    get: operations["listReceivingFriendRequests"];
  };
  "/friend_requests/status": {
    patch: operations["updateFriendRequestStatus"];
  };
  "/friends": {
    get: operations["listFriends"];
  };
  "/post_seen_logs": {
    post: operations["createPostSeenLog"];
  };
  "/friendships": {
    get: operations["listFriendships"];
    delete: operations["deleteFriendship"];
  };
  "/users": {
    get: operations["findUserList"];
  };
  "/users/{id}": {
    get: operations["findUser"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
  "/message_reactions": {
    post: operations["createMessageReaction"];
  };
  "/message_reactions/{id}": {
    delete: operations["deleteMessageReaction"];
    parameters: {
      path: {
        id: number;
      };
    };
  };
}

export interface components {
  schemas: {
    /** EntityFriendship */
    EntityFriendship: {
      id: number;
      friendId: number;
      friend?: components["schemas"]["EntityUser"];
    };
    /** EntityMessage */
    EntityMessage: {
      id: number;
      content: string;
      userId?: number;
      roomId: string;
      postId?: number;
      /** Format: date-time */
      createdAt: string;
      /** Format: date-time */
      updatedAt: string;
      user?: components["schemas"]["EntityUser"];
      post?: components["schemas"]["EntityPost"];
      messageReactions?: components["schemas"]["EntityMessageReaction"][];
    };
    EntityAccount: {
      /** Format: int32 */
      id: number;
      name: string;
      email: string;
      iconImageUrl?: string;
      friendIds: number[];
      /** @description 友達リクエストを送っているユーザーID */
      sendingRequestUserIds: number[];
      /** @description 友達リクエストを受けているユーザーID */
      receivingRequestUserIds: number[];
    };
    EntityPost: {
      id: number;
      content?: string;
      userId: number;
      /** Format: date-time */
      createdAt: string;
      user?: components["schemas"]["EntityUser"];
      /** @description 閲覧可能者。自分の投稿でのみ取得可能。 */
      viewables?: components["schemas"]["EntityPostViewable"][];
      /** @description 既読情報。自分の投稿でのみ取得可能。 */
      seenLogs?: components["schemas"]["EntityPostSeenLog"][];
      /** @description 投稿についたDM、リアクション一覧。自分の投稿でのみ取得可能。 */
      messages?: components["schemas"]["EntityMessage"][];
    } & {
      body: unknown;
    };
    EntityUser: {
      /** Format: int32 */
      id: number;
      name: string;
      iconImageUrl?: string;
    };
    /** EntityRoom */
    EntityRoom: {
      id: string;
      messages: components["schemas"]["EntityMessage"][];
      roomUsers: components["schemas"]["EntityRoomUser"][];
    };
    /** EntityRoomUser */
    EntityRoomUser: {
      roomId: string;
      userId: number;
      /** Format: date-time */
      readAt?: string;
      user?: components["schemas"]["EntityUser"];
    };
    EntityFriendRequest: {
      id: number;
      senderId: number;
      receiverId: number;
      /** Format: date-time */
      createdAt: string;
      sender?: components["schemas"]["EntityUser"];
      receiver?: components["schemas"]["EntityUser"];
    };
    /** EntityMessageReaction */
    EntityMessageReaction: {
      id: number;
      content: string;
      userId?: number;
      messageId: number;
    };
    EntityPostSeenLog: {
      userId: number;
      postId: number;
      user?: components["schemas"]["EntityUser"];
      /** Format: date-time */
      createdAt: string;
    };
    EntityPostViewable: {
      id: number;
      userId: number;
      postId: number;
      /** Format: date-time */
      createdAt: string;
    };
    EntityTimeline: {
      user: components["schemas"]["EntityUser"];
      posts: components["schemas"]["EntityPost"][];
    };
    /** @enum {string} */
    EnumFriendRequestStatus: "Requesting" | "Accepted" | "Declined";
    RequestPagination: {
      cursor?: number;
      isNext?: boolean;
      size?: number;
      /** @enum {string} */
      order?: "ASC" | "DESC";
    };
  };
  responses: {
    /** OK */
    ResponseSuccess: {
      content: {
        "application/json": {
          success: boolean;
        };
      };
    };
    /** Bad Request */
    ResponseBadRequest: {
      content: {
        "application/json": {
          message?: string;
        };
      };
    };
    /** OK */
    ResponseNullableAccount: {
      content: {
        "application/json": {
          user?: components["schemas"]["EntityAccount"];
        };
      };
    };
    /** OK */
    ResponseAccount: {
      content: {
        "application/json": {
          user: components["schemas"]["EntityAccount"];
        };
      };
    };
    /** OK */
    ResponseRoomList: {
      content: {
        "application/json": {
          rooms: components["schemas"]["EntityRoom"][];
        };
      };
    };
    /** OK */
    ResponseRoom: {
      content: {
        "application/json": {
          room: components["schemas"]["EntityRoom"];
        };
      };
    };
    /** OK */
    ResponseSignIn: {
      content: {
        "application/json": {
          user: components["schemas"]["EntityAccount"];
          /** @description このtokenをヘッダーに入れるて認証する */
          token: string;
        };
      };
    };
    /** OK */
    ResponsePost: {
      content: {
        "application/json": {
          post: components["schemas"]["EntityPost"];
        };
      };
    };
    /** OK */
    ResponsePostList: {
      content: {
        "application/json": {
          posts: components["schemas"]["EntityPost"][];
        };
      };
    };
    /** OK */
    ResponseMessageList: {
      content: {
        "application/json": {
          messages: components["schemas"]["EntityMessage"][];
        };
      };
    };
    /** OK */
    ResponseMessage: {
      content: {
        "application/json": {
          message: components["schemas"]["EntityMessage"];
        };
      };
    };
    /** OK */
    ResponseTimelineList: {
      content: {
        "application/json": {
          timelines: components["schemas"]["EntityTimeline"][];
        };
      };
    };
    /** OK */
    ResponseFriendRequestList: {
      content: {
        "application/json": {
          friendRequests: components["schemas"]["EntityFriendRequest"][];
          totalCount: number;
        };
      };
    };
    /** OK */
    ResponseFriendList: {
      content: {
        "application/json": {
          friends: components["schemas"]["EntityUser"][];
        };
      };
    };
    /** OK */
    ResponsePostSeenLogList: {
      content: {
        "application/json": {
          postSeenLogs: components["schemas"]["EntityPostSeenLog"][];
        };
      };
    };
    /** OK */
    ResponseFriendshipList: {
      content: {
        "application/json": {
          friendships: components["schemas"]["EntityFriendship"][];
        };
      };
    };
    /** OK */
    ResponseUserList: {
      content: {
        "application/json": {
          users: components["schemas"]["EntityUser"][];
        };
      };
    };
    /** OK */
    ResponseUser: {
      content: {
        "application/json": {
          user: components["schemas"]["EntityUser"];
        };
      };
    };
    /** OK */
    ResponseMessageReaction: {
      content: {
        "application/json": {
          messageReaction: components["schemas"]["EntityMessageReaction"];
        };
      };
    };
  };
}

export interface operations {
  signIn: {
    responses: {
      200: components["responses"]["ResponseSignIn"];
      400: components["responses"]["ResponseBadRequest"];
    };
    requestBody: {
      content: {
        "application/json": {
          email: string;
          password: string;
        };
      };
    };
  };
  signOut: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          deviceId: string;
        };
      };
    };
  };
  getAccount: {
    responses: {
      200: components["responses"]["ResponseNullableAccount"];
    };
  };
  createAccount: {
    responses: {
      200: components["responses"]["ResponseSignIn"];
    };
    requestBody: {
      content: {
        "application/json": {
          name: string;
          email: string;
          password: string;
        };
      };
    };
  };
  updateIconImage: {
    responses: {
      200: components["responses"]["ResponseAccount"];
    };
    requestBody: {
      content: {
        "multipart/form-data": {
          /** Format: binary */
          file: string;
        };
      };
    };
  };
  updateProfile: {
    responses: {
      200: components["responses"]["ResponseAccount"];
    };
    requestBody: {
      content: {
        "application/json": {
          name: string;
          email: string;
        };
      };
    };
  };
  findPostList: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
        filter: {
          userId: number;
        };
      };
    };
    responses: {
      200: components["responses"]["ResponsePostList"];
    };
  };
  createPost: {
    responses: {
      200: components["responses"]["ResponsePost"];
    };
    requestBody: {
      content: {
        "application/json": {
          post: {
            body?: string;
          };
        };
      };
    };
  };
  findPost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponsePost"];
    };
  };
  deletePost: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
  };
  findRoomList: {
    responses: {
      200: components["responses"]["ResponseRoomList"];
    };
  };
  findOrCreateRoom: {
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
    requestBody: {
      content: {
        "application/json": {
          userIds: number[];
        };
      };
    };
  };
  findRoom: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
  };
  updateReadAt: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseRoom"];
    };
  };
  listMessages: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
        roomId: string;
      };
    };
    responses: {
      200: components["responses"]["ResponseMessageList"];
    };
  };
  createMessage: {
    responses: {
      200: components["responses"]["ResponseMessage"];
    };
    requestBody: {
      content: {
        "application/json": {
          content: string;
          roomId: string;
        };
      };
    };
  };
  createMessageViaPost: {
    responses: {
      200: components["responses"]["ResponseMessage"];
    };
    requestBody: {
      content: {
        "application/json": {
          content: string;
          postId: number;
        };
      };
    };
  };
  listTimelinesByEachPerson: {
    responses: {
      200: components["responses"]["ResponseTimelineList"];
    };
  };
  createFriendRequest: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          receiverId: number;
        };
      };
    };
  };
  deleteFriendRequest: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          receiverId: number;
        };
      };
    };
  };
  listReceivingFriendRequests: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
      };
    };
    responses: {
      200: components["responses"]["ResponseFriendRequestList"];
    };
  };
  updateFriendRequestStatus: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          senderId: number;
          status: components["schemas"]["EnumFriendRequestStatus"];
        };
      };
    };
  };
  listFriends: {
    responses: {
      200: components["responses"]["ResponseFriendList"];
    };
  };
  createPostSeenLog: {
    responses: {
      200: components["responses"]["ResponsePostSeenLogList"];
    };
    requestBody: {
      content: {
        "application/json": {
          postIds: number[];
        };
      };
    };
  };
  listFriendships: {
    responses: {
      200: components["responses"]["ResponseFriendshipList"];
    };
  };
  deleteFriendship: {
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
    requestBody: {
      content: {
        "application/json": {
          friendId: number;
        };
      };
    };
  };
  findUserList: {
    parameters: {
      query: {
        pagination?: components["schemas"]["RequestPagination"];
        filter: {
          uuid?: string;
        };
      };
    };
    responses: {
      200: components["responses"]["ResponseUserList"];
    };
  };
  findUser: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponseUser"];
    };
  };
  createMessageReaction: {
    responses: {
      200: components["responses"]["ResponseMessageReaction"];
    };
    requestBody: {
      content: {
        "application/json": {
          messageId: number;
          content: string;
        };
      };
    };
  };
  deleteMessageReaction: {
    parameters: {
      path: {
        id: number;
      };
    };
    responses: {
      200: components["responses"]["ResponseSuccess"];
    };
  };
}

export interface external {}
