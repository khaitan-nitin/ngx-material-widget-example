import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';

import { navigation, navigationPannel } from './layout/config/navigation.config';
import { Navigation, NavigationFlatNode } from 'ngx-material-widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private breakpointObserver: BreakpointObserver,
    public http: HttpClient, 
    public router: Router, 
    public route: ActivatedRoute,
  ) { 
    this.dataSource.data = navigation;
  }

  ngOnInit(): void {
    this.router.navigate(['/example/component/button/button-type']);
  }

  isExpanded = true;
  navigationdata: any = navigationPannel;

  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  private _transformer = (node: Navigation, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      route: node.route,
      icon: node.icon,
      name: node.name,
      permission: node.permission,
      level: level,
    }; 
  }

  treeControl = new FlatTreeControl<NavigationFlatNode>(
    node => node.level, 
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: NavigationFlatNode) => node.expandable;

  navigate(node: Navigation)  {
    console.log(node);
  }

}
