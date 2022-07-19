import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service'

@Component({
  selector: 'app-list-cafe',
  templateUrl: './list-cafe.component.html',
  styleUrls: ['./list-cafe.component.css']
})
export class ListCafeComponent implements OnInit {
  public collection:any;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getCafeList().subscribe((result)=>{

      this.collection=result;
      console.log(this.collection)
    });
  }

}
