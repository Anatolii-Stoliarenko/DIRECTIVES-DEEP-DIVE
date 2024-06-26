import { Directive, input } from "@angular/core";

@Directive({
  selector: "a[appSaveLink]",
  standalone: true,
  host: {
    "(click)": "onConfirmLeavePage($event)",
  },
})
export class SafeLinkDirective {
  queryParam = input("myApp");

  constructor() {
    console.log("SaveLinkDirective is Active!");
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm("Do you reale want leave this page?"); //confirm message

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href; //retrive link
      (event.target as HTMLAnchorElement).href =
        address + "?from=" + this.queryParam(); //change link
      return;
    }
    event.preventDefault();
  }
}
