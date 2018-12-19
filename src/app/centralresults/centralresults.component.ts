import { Component, OnInit,  } from '@angular/core';
import { FetchdataserviceService } from '../fetchdataservice.service';

@Component({
  selector: 'app-centralresults',
  templateUrl: './centralresults.component.html',
  styleUrls: ['./centralresults.component.scss'],
})

export class CentralresultsComponent implements OnInit {

  result: any;
  data: any[]=[];
  date: any;
  uptime:string;
  Math = Math;

  constructor(private service: FetchdataserviceService) { }

    fetchGeev(){
      let startFrom = new Date().getTime();         
      this.service.getData().subscribe(response => {
        this.result = response;
      console.log(response)},
        (err) => {console.log("err :",err)}
        );
        const datayeah = {latence: Math.ceil(new Date().getTime() - startFrom), mydate:new Date().getTime()}
        this.data.unshift(datayeah);
        this.data.splice(5,1);
        this.uptime= this.data.includes(null)?'< 100%':'100%';
        this.date = new Date().getTime();
      }
    
    ngOnInit() {  
      this.fetchGeev();
      setInterval(this.fetchGeev.bind(this),60000);
      this.date = new Date().getTime();
      this.uptime= this.data.includes(null)?'< 100%':'100%';
    }
}