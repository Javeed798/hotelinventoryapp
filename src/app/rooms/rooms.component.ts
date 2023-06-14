import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
    selector: 'app-rooms',
    templateUrl: './rooms.component.html',
    styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
    hotelName: string = 'Ninja Hotel';

    hasRooms: boolean = false;

    toggle() {
        this.hasRooms = !this.hasRooms;
    }
    rooms: Room = {
        totalRooms: 10,
        availableRooms: 5,
        bookedRooms: 5,
    };
    ngOnInit(): void {}

    roomList: RoomList[] = [
        {
            roomType: 'Single',
            amenities: 'Kitchen',
            price: 1000,
            photos: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            checkingTime: new Date(),
            checkoutTime: new Date('12-06-2023'),
        },
        {
            roomType: 'Double',
            amenities: 'Bedroom',
            price: 1000,
            photos: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            checkingTime: new Date(),
            checkoutTime: new Date('12-06-2023'),
        },
        {
            roomType: 'Triple Deluxe',
            amenities: 'Bedroom',
            price: 1000,
            photos: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
            checkingTime: new Date(),
            checkoutTime: new Date('12-06-2023'),
        },
    ];

    selectRoom(room: RoomList) {
        this.selectedRoom = room;
    }

    selectedRoom! :  RoomList;
}
