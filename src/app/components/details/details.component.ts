import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {Details} from '../../core/model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  @Input() data$!: Observable<Details>;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.data$.subscribe(console.log);
  }

}
