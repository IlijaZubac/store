import { Component, OnInit } from '@angular/core';
import { BuyerServiceService } from '../../buyer-service.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  buyers = [];
  constructor(private buyerService: BuyerServiceService) {
    this.buyers = this.buyerService.getBuyers();
   
  }

  ngOnInit() {
  }

}
