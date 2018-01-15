import { Component, OnInit } from '@angular/core';
import { BuyerServiceService } from '../services/buyer-service.service';

@Component({
  selector: 'app-buyers',
  templateUrl: './buyers.component.html',
  styleUrls: ['./buyers.component.css']
})
export class BuyersComponent implements OnInit {
  buyers = [];
  newBuyer = {};
  constructor(private buyerService: BuyerServiceService) {
    this.buyers = this.buyerService.getBuyers();
   
  }
  removeBuyer(buyer)
  {
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index,1);
  }
  addBuyer(){
    this.buyerService.addBuyer(this.newBuyer);
    this.newBuyer = {};
  }

  ngOnInit() {
  }

}
