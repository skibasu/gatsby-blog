class ScreenLock {

   lock(){

      this.isLocked = false;
      this.window = window ? window : null;
      this.body = document.querySelector('Body')
      this.html = document.querySelector('Html')
      this.windowHeight = window ? this.window.innerHeight : 0;
      this.scrollTop = this.html.scrollTop || this.body.scrollTop

      this.html.style.width="100%";
      this.html.style.height = `${this.windowHeight}px`;
      this.html.style.overflowY = "overflow";
      this.html.style.position = "fixed";
      this.body.style.height = `${this.windowHeight + this.scrollTop}px`;
      this.body.style.overflow = 'scroll';
      this.body.style.marginTop= `-${this.scrollTop}px`;

   }
   unlock(){

      this.isLocked = false;
      this.window = window ? window : null;
      this.body = document.querySelector('Body')
      this.html = document.querySelector('Html')
      this.windowHeight = window ? this.window.innerHeight : 0;
      this.scrollTop = this.html.scrollTop || this.body.scrollTop


      this.html.style.width = "";
      this.html.style.height = ``;
      this.html.style.overflowY = "";
      this.html.style.position = "";
      this.body.style.height = ``;
      this.body.style.overflow = '';
      this.body.style.marginTop = ``;

      this.body.scrollTop = this.scrollTop;

   }
}
 export default ScreenLock;