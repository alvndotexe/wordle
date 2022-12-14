import { IS_BROWSER } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import { FilterUnion, Messages, MessageType } from "./MessageTypes.ts";

export class SocketWrapper {
  #socket: WebSocket;
  #actions: Map<
    MessageType,
    (message: Messages, socket: SocketWrapper) => void
  >;
  constructor(socket: WebSocket) {
    this.#socket = socket;
    this.#actions = new Map();
    this.#startListening();
  }
  on = <Mtype extends MessageType>(
    action: Mtype,
    actionFunction: (
      messageBody: FilterUnion<Messages, Mtype>,
      socket: SocketWrapper
    ) => void
  ) => {
    this.#actions.set(action, actionFunction);
    return this;
  };
  onOPen = (callback: (socketWrapper: SocketWrapper, event: Event) => void) => {
    this.#socket.onopen = (e) => {
      callback(this, e);
    };
    return this;
  };
  onClose = (
    callback: (socketWrapper: SocketWrapper, event: Event) => void
  ) => {
    this.#socket.onclose = (e) => {
      callback(this, e);
    };
    return this;
  };
  send = <M extends MessageType>(
    messageType: M,
    messageBody: Omit<FilterUnion<Messages, M>, "messageType">
  ) => {
    if (this.#socket.readyState === 1) {
      this.#socket.send(JSON.stringify({ ...messageBody, messageType }));
    }
    return this;
  };
  close = () => {
    this.#socket.close;
  };
  //TODO onError
  #startListening() {
    this.#socket.addEventListener("message", (e) => {
      const message = JSON.parse(e.data) as unknown as Messages;
      if (IS_BROWSER) console.log(message);
      const messageType = message.messageType;
      if (!messageType || !this.#actions.has(messageType)) {
        throw new Error(
          "unknown message type " + IS_BROWSER + "\n" + JSON.stringify(message)
        );
      }
      const fn = this.#actions.get(messageType)!;
      fn(message, this);
    });
    this.#socket.onerror = () => this.#socket.close;
  }
}
