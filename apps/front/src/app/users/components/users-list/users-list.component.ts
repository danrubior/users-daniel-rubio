import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements AfterViewInit {
  @Input() usersData!: MatTableDataSource<User>;
  @Input() filterValue$?: Observable<string>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns = ['id', 'email', 'name', 'surname'];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.usersData.paginator = this.paginator;
    this.usersData.sort = this.sort;
    this.cdr.markForCheck();
  }
}
