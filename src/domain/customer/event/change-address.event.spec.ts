import EventDispatcher from "../../@shared/event/event-dispatcher";
import ChangeAddressEvent from "./change-address.event";
import EnviaConsoleLogHandler from "./handler/envia-console-log-handler";

describe("Change address event", () => {
    it("should notify all event handlers when customer is created", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new EnviaConsoleLogHandler();
        const spyEventHandler = jest.spyOn(eventHandler, "handle");
        
        eventDispatcher.register("ChangeAddressEvent", eventHandler);

        expect(eventDispatcher.getEventHandlers["ChangeAddressEvent"][0]).toMatchObject(eventHandler);

        const changeAddressEvent = new ChangeAddressEvent({
            id: "1",
            name: "Customer 1",
            address: "Rua 1"
        });

        eventDispatcher.notify(changeAddressEvent);

        expect(spyEventHandler).toHaveBeenCalled();
    });
});