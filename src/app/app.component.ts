import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host:{'(document:click)':'handleclick($event)'}
})
export class AppComponent implements OnInit {
  title = 'scroll-loader';
  constructor(){}

  ngOnInit(){

  }

  @HostListener('document:scroll',['$event'])
  scrolled(event:any){
    let elements = document.querySelectorAll('.items');
    let windowheight = window.innerHeight;
    elements.forEach((ele:any)=>{
      let top = ele.getBoundingClientRect().top;
      if(top< (windowheight/2+30)){
        ele.classList.add('-append')
      }
      else{
        ele.classList.remove('-append')
      }
    })
  }
  handleclick(event:any){
    console.log(event)
  }
}
