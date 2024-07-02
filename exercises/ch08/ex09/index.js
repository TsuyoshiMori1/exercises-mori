export function withResource(
  resource: {
    called?: never[];
    doA?: (() => void) | (() => never);
    doB?: () => void;
    close: any;
  },
  fn: { (res: any): void; (res: any): any; (arg0: any): void }
) {
  try {
    fn(resource);
  } finally {
    resource.close();
  }
}
