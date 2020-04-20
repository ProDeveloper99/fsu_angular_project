import { Component, Input } from "@angular/core";
import { User } from "../../model/user";

@Component({
  selector: "emanuil",
  templateUrl: "./emanuil.component.html",
  styleUrls: ["./emanuil.component.css"],
})
export class EmanuilComponent {
  @Input() user: User;
}
