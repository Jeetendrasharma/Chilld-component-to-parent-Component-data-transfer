import { Component, OnInit, Output, EventEmitter } from "@angular/core";//JD

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Output() parentFunction: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.parentFunction.emit("Jeetendra");
  }
}
