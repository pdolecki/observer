import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  Subject,
  switchMap,
} from 'rxjs';

@Injectable()
export class DemoService {
  query$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  query() {
    return this.query$.pipe(
      filter((val) => !!val),
      distinctUntilChanged(),
      debounceTime(500),
      switchMap((query) =>
        this.searchTodo(query).pipe(
          catchError(() => {
            return of({ error: 'No records found' });
          })
        )
      )
    );
  }

  // query(queryValue: Observable<string>) {
  //   return queryValue.pipe(
  //     filter((val) => !!val),
  //     distinctUntilChanged(),
  //     debounceTime(500),
  //     switchMap((query) =>
  //       this.searchTodo(query).pipe(
  //         catchError(() => {
  //           return of({ error: 'No records found' });
  //         })
  //       )
  //     )
  //   );
  // }

  searchTodo(query: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${query}`);
  }
}
