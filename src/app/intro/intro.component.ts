import { Component, OnInit } from '@angular/core';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import GLightbox from 'GLightbox';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  lightbox: any;



  faArrowRight = faArrowRight;
  faPlayCircle = faPlayCircle;

  constructor() { }

  ngOnInit(): void {
    this.lightbox = GLightbox({ 'href': 'https://youtu.be/wSyvDws6Oyc',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
    'autoPLayVideos': true,
  })
  }

}
