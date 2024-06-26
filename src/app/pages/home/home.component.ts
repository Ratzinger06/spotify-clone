import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/searchBar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {}
  constructor(private sb: SearchBarService){}
  public songCards = [
    {
      song_id: 1,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: 'assets/Chamba1.mp3',
    },
    {
      song_id: 2,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: 'assets/Chamba2.mp3',
    },
    {
      song_id: 3,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 4,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 5,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 6,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 7,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 8,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 9,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 10,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 11,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 12,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 13,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 14,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 15,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 16,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },
    {
      song_id: 17,
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?",
      song_link: '',
    },  
  ]
  @ViewChild('scrollContainer1', { static: false }) scrollContainer1!: ElementRef;
  @ViewChild('scrollContainer2', { static: false }) scrollContainer2!: ElementRef;
  ngAfterViewInit() {
    this.addHorizontalScroll(this.scrollContainer1.nativeElement);
    this.addHorizontalScroll(this.scrollContainer2.nativeElement);
  }
  addHorizontalScroll(container: HTMLElement) {
    container.addEventListener('wheel', (event: WheelEvent) => {
      if (event.deltaY !== 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    });
  }
  onNavigate(pageName: string){
    if(pageName === 'search'){
      this.sb.isSearchVisible.next(true);
    }else{
      this.sb.isSearchVisible.next(false);
    }
  }
}
