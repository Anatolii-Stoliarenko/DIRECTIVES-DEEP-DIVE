import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector: "a[appSaveLink]",
  standalone: true,
  host: {
    "(click)": "onConfirmLeavePage($event)",
  },
})
export class SafeLinkDirective {
  queryParam = input("myApp", { alias: "appSaveLink" });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    // console.log("SaveLinkDirective is Active!");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you reale want leave this page?"); //confirm message

    if (wantsToLeave) {
      //const address = (event.target as HTMLAnchorElement).href; //retrive link
      // (event.target as HTMLAnchorElement).href =
      //   address + "?from=" + (this.queryParam() ? this.queryParam() : "myApp"); //change link

      const address = this.hostElementRef.nativeElement.href;

      this.hostElementRef.nativeElement.href =
        address + "?from=" + (this.queryParam() ? this.queryParam() : "myApp"); //change link

      return;
    }
    event.preventDefault();
  }
}
