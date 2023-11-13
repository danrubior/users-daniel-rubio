import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './containers/users.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './users.routes';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './components/users-list/users-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const matModules = [
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [UsersComponent, UsersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    ...matModules,
  ],
  providers: [UsersService],
})
export class UsersModule {}
