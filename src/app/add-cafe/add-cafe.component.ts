import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService} from '../common.service'


@Component({
  selector: 'app-add-cafe',
  templateUrl: './add-cafe.component.html',
  styleUrls: ['./add-cafe.component.css']
})
export class AddCafeComponent implements OnInit {
  alert:boolean = false;
  addCafe=new FormGroup({
    NameCafe:new FormControl(''),
    Adress:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private cafe:CommonService) { }

  ngOnInit(): void {
  }
  createCafe(){
    //console.log(this.addCafe.value);
    this.cafe.addCafe(this.addCafe.value).subscribe((result)=>{
      this.alert=true;
      this.addCafe.reset({});
      console.log("get data service", result)
    })
  }

  closeAlert(){
    this.alert=false;
  }
}
