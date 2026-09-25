export const menuState = $state({
  isOpen: false,
  toggle() {
    this.isOpen = !this.isOpen;
  }
});