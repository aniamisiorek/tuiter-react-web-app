const NavigationSidebar = () => {
  return(`
   <div class="list-group">
        <a href="" class="list-group-item list-group-item-action">
          <i class="fab fa-twitter wd-text-14"></i></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-home wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Home</span></span></a>
        <a href="" class="list-group-item list-group-item-action active">
          <span><i class="fa fa-hashtag wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Explore</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-bell wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Notifications</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-envelope wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Messages</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-bookmark wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Bookmarks</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-list wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Lists</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-user wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">Profile</span></span></a>
        <a href="" class="list-group-item list-group-item-action">
          <span><i class="fa fa-ellipsis-h wd-text-14"></i><span
              class="d-none d-xl-inline ms-2">More</span></span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;