import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../interfaces/user.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  form = this.generateForm();
  usersData!: MatTableDataSource<User>;
  loading = true;

  constructor(
    private fb: FormBuilder,
    @Inject(UsersService) private usersService: UsersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.loading = true;

    this.usersService.getUsers().subscribe({
      next: (users) => {
        this.usersData = new MatTableDataSource<User>(users);
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        console.log('error');
        this.loading = false;
        this.cdr.markForCheck();
      },
    });
  }

  onSubmit() {
    const search = this.form.get('search')?.value;

    if (this.usersData) {
      this.usersData.filter = (search || '').trim().toLowerCase();

      if (this.usersData.paginator) {
        this.usersData.paginator.firstPage();
      }
    }
  }

  private generateForm(): FormGroup {
    const form = this.fb.group({
      search: [],
    });

    return form;
  }
}
