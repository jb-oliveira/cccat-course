import AirportTicketCalculator from "./AirportTicketCalculator";
import BeachTicketCalculator from "./BeachTicketCalculator";
import ParkingLot from "./ParkingLot";
import ShoppingTicketCalculator from "./ShoppingTicketCalculator";

test("Deve calcular o valor do ticket para um carro que ficou 3 horas estacionado na praia.", function(){
    const parkingLot = new ParkingLot(new BeachTicketCalculator());
    parkingLot.checkin("ABC-9876", new Date("2020-10-10T10:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2020-10-10T13:00:00"));
    expect(ticket.amount).toBe(15);    
});

test("Deve calcular o valor do ticket para um carro que ficou 10 horas estacionado na Aeroporto.", function(){
    const parkingLot = new ParkingLot(new AirportTicketCalculator());
    parkingLot.checkin("ABC-9876", new Date("2020-10-10T10:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2020-10-10T20:00:00"));
    expect(ticket.amount).toBe(31);    
});

test("Deve calcular o valor do ticket para um carro que ficou 2 horas estacionado no Shopping.", function(){
    const parkingLot = new ParkingLot(new ShoppingTicketCalculator());
    parkingLot.checkin("ABC-9876", new Date("2020-10-10T12:00:00"));
    const ticket = parkingLot.checkout("ABC-9876", new Date("2020-10-10T14:00:00"));
    expect(ticket.amount).toBe(0);    
});