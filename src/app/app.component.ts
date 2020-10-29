import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-pipes'
  search: string = ''
  searchField = 'title'
  posts: Post[] = [
    { title: 'Soda Pop', text: 'Самая лучшая в мире газировка' },
    { title: 'Bread', text: 'The best bread in the world' },
    { title: 'Pumpkin', text: 'The most popular pumpkin in the world' }
  ]

  e: number = Math.E
  str: string = 'hello world'
  date = new Date()
  float = 0.42
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  }
}
