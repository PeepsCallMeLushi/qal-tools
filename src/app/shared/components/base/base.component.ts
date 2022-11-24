import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  public height = window.innerHeight;
  public width = window.innerWidth;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;
  }

  ngOnInit(): void {
  }

  public widthBiggerThan(comparisson: number): boolean {
    return this.width > comparisson
  }

  public widthBiggerThanOrEqualTo(comparisson: number): boolean {
    return this.width >= comparisson
  }

  public widthSmallerThan(comparisson: number): boolean {
    return this.width < comparisson
  }

  public widthSmallerThanOrEqualTo(comparisson: number): boolean {
    return this.width <= comparisson
  }

  public heightBiggerThan(comparisson: number): boolean {
    return this.height > comparisson
  }

  public heightBiggerThanOrEqualTo(comparisson: number): boolean {
    return this.height >= comparisson
  }

  public heightSmallerThan(comparisson: number): boolean {
    return this.height < comparisson
  }

  public heightSmallerThanOrEqualTo(comparisson: number): boolean {
    return this.height <= comparisson
  }

}
