import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
    standalone: true
})

export class HighlightDirective {
    constructor(private el: ElementRef) { }

    setBgColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter')
    OnMouseEnter() {
        this.setBgColor('yellow');
    }
    @HostListener('mouseleave')
    OnMouseLeave() {
        this.setBgColor('');
    }

}