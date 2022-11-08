export class MenuSidebar {
  divider: boolean;
  dividerName: string;
  linkName: string;
  linkIcon: string;
  linkVisible : boolean;
  linkRouter : string;

  constructor(
    divider: boolean = false,
    dividerName: string = '',
    linkName: string = '',
    linkIcon: string = '',
    linkRouter: string = '',
    linkVisible : boolean = true
  ) {
    this.divider = divider;
    this.dividerName = dividerName;
    this.linkName = linkName;
    this.linkIcon = linkIcon;
    this.linkRouter = linkRouter;
    this.linkVisible = linkVisible;
  }
}
