import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    // selector: '[app-server]', // property selector
    // selector: '.app-server', // class selector
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent {
    serverID:number = 1731710084;
    serverStatus = 'offline';

    getServerStatus(){
        return this.serverStatus;
    }
}