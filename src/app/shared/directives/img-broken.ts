import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
  standalone: false,
})
export class ImgBroken {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    elNative.src = 'https://yt3.googleusercontent.com/flE5VHe0QfQ9XqeDiwQslGbErboKLzh-UaK5FPfKpIHi1mzzeT8eL5IRifoOmni17oed_v8AkfPToVQDUA'
  }

  constructor(private elHost: ElementRef) {}
}
