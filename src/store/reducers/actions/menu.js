export function handleScroll(e) {
  if (navigator.userAgent.indexOf("Chrome") >= 0) {
    if (e.path[1].scrollY > 200) {
      this.setState({ hidden: false });
    } else {
      this.setState({ hidden: true });
    }
  } else {
    if (e.pageY > 200) {
      this.setState({ hidden: false });
    } else {
      this.setState({ hidden: true });
    }
  }
}
