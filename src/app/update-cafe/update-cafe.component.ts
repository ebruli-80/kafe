import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service'
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-cafe',
  templateUrl: './update-cafe.component.html',
  styleUrls: ['./update-cafe.component.css']
})
export class UpdateCafeComponent implements OnInit {
  alert:boolean=false;
  editCafe=new FormControl({
    NameCafe:new FormControl(''),
    Adress:new FormControl(''),
    email:new FormControl('')
  })

  constructor(private cafe:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.cafe.getCurrentData(this.router.snapshot.params.id).subscribe((result)=>{
      this.editCafe=new FormControl({
        NameCafe:new FormControl(result=['NameCafe']),
        Adress:new FormControl(result=['Adress']),
        email:new FormControl(result=['email'])
      })
    })
  }
  

}
