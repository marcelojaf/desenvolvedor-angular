import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { MenuComponent } from "./navegacao/menu/menu.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenuComponent],
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = "MeuProjeto";
}
