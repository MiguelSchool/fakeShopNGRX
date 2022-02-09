import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'main-method-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.less']
})
export class NavElementComponent implements OnInit {

  @Input('navItemValue')navItemValueProps :string | undefined;
  @Input('icon')iconProp :string| undefined
  @Input('routerLink')routerLinkProp :string| undefined

  constructor() { }

  ngOnInit(): void {}

}
