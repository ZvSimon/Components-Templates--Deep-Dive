import { Component } from '@angular/core';
import {dummyTrafficData} from "../../data/traffic.data";


@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrls: ['./traffic.component.css']
})
export class TrafficComponent {

  maxTraffic = Math.max(...dummyTrafficData.map((data) => data.value));

}
