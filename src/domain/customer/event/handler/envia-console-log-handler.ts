import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import ChangeAddressEvent from "../change-address.event";

export default class EnviaConsoleLogHandler implements EventHandlerInterface<ChangeAddressEvent> {
    handle(event: ChangeAddressEvent): void {
        const { id, name, address } = event.eventData;
        console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}`);
    }
}