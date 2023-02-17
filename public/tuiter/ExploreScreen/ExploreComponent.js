import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return(`
      <div class="form-group has-search d-flex mb-2 align-items-center">
        <span class="fa fa-search position-absolute ps-3"></span>
        <input type="text" class="form-control rounded-pill ps-5" placeholder="Search Twitter">
        <i class="fa fa-cog ps-2 text-primary wd-text-24"></i>
      </div>
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>
      <div class="position-relative mt-1 text-white">
        <img class="w-100" src="../../images/starship.webp">
        <div class="position-absolute fw-bold wd-img-text">SpaceX's Starship</div>
      </div>
      ${PostSummaryList()}
    `);
}
export default ExploreComponent;
