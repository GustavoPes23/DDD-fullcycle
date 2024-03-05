import EventInterface from "./event.interface";

//o event tem que implementar o EventInterface (event: T); T extende EventInterface que o tipo padrão é EventInterface
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {
    handle(event: T): void;
}