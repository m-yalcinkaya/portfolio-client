import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Blog } from '../../../../services/common/models/blog';
import { List_Blog } from '../../../../contracts/list_blog';
import {
  BaseComponent,
  SpinnerType,
} from '../../../../base-component/base-component';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  Alertify,
  MessageType,
  Position,
} from '../../../../services/admin/alertify';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List extends BaseComponent implements OnInit {
  constructor(
    private blogService: Blog,
    spinner: NgxSpinnerService,
    private alertify: Alertify
  ) {
    super(spinner);
  }

  displayedColumns: string[] = [
    'title',
    'content',
    'thumbnailUrl',
    'isPublished',
  ];

  dataSource: MatTableDataSource<any> = null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  async getBlogs() {
    this.showSpinner(SpinnerType.BallBeat);
    const allBlogs: { totalCount: number; blogs: List_Blog[] } =
      await this.blogService.read(
        this.paginator ? this.paginator.pageIndex : 0,
        this.paginator ? this.paginator.pageSize : 5,
        () => this.hideSpinner(SpinnerType.BallBeat),
        (errorMessage) =>
          this.alertify.message(errorMessage, {
            dismissOthers: true,
            messageType: MessageType.Error,
            position: Position.TopRight,
          })
      );

    var data = new MatTableDataSource<any>(allBlogs.blogs);
    this.dataSource = data;
    this.paginator.length = allBlogs.totalCount;
  }

  async pageChanged() {
    await this.getBlogs();
  }

  async ngOnInit() {
    await this.getBlogs();
  }
}
