import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MatDrawerContent } from '@angular/material/sidenav';
import { DocRoute } from '@ledge-framework/view/lib/ledge-multiple-docs/doc-route.model';

export const lists: DocRoute[] = [{ displayName: '示例', source: 'sample' }];

@Component({
  selector: 'app-checklists',
  templateUrl: './checklists.component.html',
  styleUrls: ['./checklists.component.scss'],
})
export class ChecklistsComponent implements OnInit {
  @ViewChild('drawerContent', { static: false })
  drawerContent: MatDrawerContent;

  currentSource: string;
  src: string;
  content: string;

  items: DocRoute[] = lists;
  currentUrl = '/checklists';
  urlPrefix = `checklists`;

  constructor(private title: Title, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((p) => {
      const param = p.get('name');
      const currentItem = this.items.find((item) => item.source === param);
      this.title.setTitle(
        `DevOps ${currentItem.displayName} 检查清单 - 开源知识平台`
      );
      this.currentSource = param;
    });
  }
}
