import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public songCards = [
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
    },
    {
      thumbnail: "https://e-cdn-images.dzcdn.net/images/cover/742aba8510ba803bea51d304cf2ca786/500x500-000000-80-0-0.jpg",
      title: "Dark Fantasy",
      description: "The plan was to drink until the pain over But whats worse, the pain or the hangover?"
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
}
