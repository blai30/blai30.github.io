import { Component } from '@angular/core';
import { ThemeService } from "../../services";

@Component({
  selector: 'app-dark-toggle',
  templateUrl: './dark-toggle.component.html',
})
export class DarkToggleComponent {
  constructor(
    private themeService: ThemeService,
  ) { }

  isDark(): boolean {
    return this.themeService.isDark;
  }

  onToggleDark(): void {
    this.themeService.toggleTheme(!this.isDark());
  }
}
