import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from 'src/app/rooms';

@Component({
    selector: 'app-room-list',
    templateUrl: './room-list.component.html',
    styleUrls: ['./room-list.component.scss'],
})
export class RoomListComponent implements OnInit {
    ngOnInit(): void {
        
    }
    @Input() rooms: RoomList[] = [];

    @Output() selectedRoom = new EventEmitter<RoomList>();

    selectRoom(room: RoomList) {
        this.selectedRoom.emit(room);
    }
}
