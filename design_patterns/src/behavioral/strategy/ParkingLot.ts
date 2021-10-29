import TicketCalculator from "./TicketCalculator";

export default class ParkingLot {
    tickets: { plate: string, checkinDate: Date }[]
    ticketCalculator: TicketCalculator;

    constructor(tickectCalculator: TicketCalculator) {
        this.tickets = [];
        this.ticketCalculator = tickectCalculator;
    }

    checkin(plate: string, checkinDate: Date) {
        this.tickets.push({ plate, checkinDate });
    }

    checkout(plate: string, checkoutDate: Date) {
        const ticket = this.tickets.find(ticket => ticket.plate = plate);
        if (!ticket) throw new Error("Ticket not found");        
        const amount = this.ticketCalculator.calculate(ticket.checkinDate,checkoutDate);
        return {
            amount
        }
    }
}