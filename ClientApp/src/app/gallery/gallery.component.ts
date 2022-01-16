import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../images/shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnChanges {
  images:any[] | undefined;
  filterBy?: string = 'all'
  visibleImages:any[] = [];

  constructor(private imageService: ImageService) {
    console.log(this.filterBy)
  }

  ngOnChanges() {
  }
}